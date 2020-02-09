import AppError from '../../utils/application_errors';

import {sequelize} from '../../models';

async function getUserInfo(userId) {
    try {
        const userInfo = await sequelize.query(
            `SELECT R.name, T.id FROM "Roles" as R JOIN  "UserRoles" UR on R.id = UR."roleId" JOIN "Users" U on UR."userId" = U.id JOIN "Tasks" T on U.id = T."userId" WHERE  UR."userId" = ${userId};`,
            {type: sequelize.QueryTypes.SELECT}
        );
        const returningInfo = {
            userTasks: [...new Set(userInfo.map(userInfo => userInfo.id))],
            userRoles: [...new Set(userInfo.map(userInfo => userInfo.name))]
        };
        if (returningInfo.userRoles && returningInfo.userRoles.length !== 0) {
            return returningInfo;
        } else {
            throw new Error('Roles not found for this user');//doesnt work
        }
    } catch (e) {
        throw new Error('Roles not found for this user');
    }
}

export default async function (req, res, next) {
    const actorId = +req.get('Authorization');
    console.log(typeof actorId, actorId);
    if (!Number.isInteger(actorId)){
        next(new AppError.NonIntegerUnauthorizedError());
    } else if ( actorId < 1 ){
        next(new AppError.NonPositiveNumberUnauthorizedError());
    }
    if (actorId) {
        req.userInfo = await getUserInfo(actorId);
        req.authorizationData = {
            id: actorId,
        };
        next();
    } else {
        next(new AppError.UnauthorizedError());
    }
}