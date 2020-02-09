import AppError from '../../utils/application_errors';

const ROLES = {
    USER: {
        CREATE: {
            TASK: true,
            USER: false,
        },
        READ: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                SELF: true,
                OTHER: false
            },
        },
        UPDATE: {
            TASK: {
                OWNER: {
                    VALUE: true,
                    IS_DONE: true,
                    DEADLINE: true,
                    USER_ID: false,
                    CREATED_AT: false,
                    UPDATED_AT: false,
                },
                NOT_OWNER: false,
            },
            USER: {
                USER: {
                    SELF: true,
                    OTHER: false,
                },
                ADMIN: false,
            },
        },
        DELETE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: false,
        },
    },
    ADMIN: {
        CREATE: {
            TASK: true,
            USER: {
                USER: true,
                ADMIN: false
            },
        },
        READ: true,
        UPDATE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                USER: {
                    SELF: true,
                    OTHER: {
                        FIRST_NAME: false,
                        LAST_NAME: false,
                        LOGIN: true,
                        PASSWORD: false,
                        EMAIL: false,
                    }
                },
                ADMIN: false,
            }
        },
        DELETE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                USER: true,
                ADMIN: false,
            }
        }
    }
};

export default function (entity) {
    return function (action) {
        return (req, res, next) => {
            try {
                const roles = req.userInfo.userRoles;
                const isOwner = req.userInfo.isOwner;
                const query = [];
                query.push(roles, action, entity, isOwner);
                console.log(query);
                if (checkPermission(query)) {
                    next();
                } else {
                    next(new AppError.ForbiddenError('Permission denied'))
                }
            } catch (e) {
                next(e);
            }
        };
    };
}

function checkPermission(query) {
    const roles = ROLES;
    const rolesArr = query[0];
    const otherQueryElements = query.slice(1);
    return rolesArr.some(elem => checkRolePermission(elem, otherQueryElements, roles));
}

function checkRolePermission(firstQueryElement, otherQueryElements, roles) {
    if (Array.isArray(firstQueryElement)) {
        return firstQueryElement.every(elem => checkRolePermission(elem, otherQueryElements, roles));
    } else {
        switch (roles[firstQueryElement]) {
            case true:
                return true;
            case undefined:
            case false:
                return false;
            default: {
                roles = roles[firstQueryElement];
                firstQueryElement = otherQueryElements[0];
                otherQueryElements = otherQueryElements.slice(1);
                return checkRolePermission(firstQueryElement, otherQueryElements, roles)
            }
        }
    }
}
