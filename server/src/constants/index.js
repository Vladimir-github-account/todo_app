export const LOGIN_PATTERN = /(?!^\d)^\w{6,16}$/;
export const PASSWORD_PATTERN = /(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])^[a-zA-Z0-9_$%@?!#]{8,60}$/;
export const USER_NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;

/**
 *
 * @typedef {Symbol} Action
 */

/**
 *
 * @enum {Action} Actions
 */
export const ACTIONS = Object.freeze( {
                                        /**
                                         * @readonly
                                         */
                                        CREATE:'CREATE' ,
                                        /**
                                         * @readonly
                                         */
                                        READ:'READ' ,
                                        /**
                                         * @readonly
                                         */
                                        UPDATE:  'UPDATE' ,
                                        /**
                                         * @readonly
                                         */
                                        DELETE: 'DELETE' ,
                                      } );

/**
 *
 * @typedef {string} Role
 */

/**
 *
 * @enum {Role} Roles
 */
export const ROLES = Object.freeze( {
                                      ADMIN: 'ADMIN',
                                      MODERATOR: 'MODERATOR',
                                      USER: 'USER',
                                    } );

/**
 * @typedef {Symbol} Entity
 */

/**
 *
 * @enum {Entity} Entities
 */
export const ENTITIES = Object.freeze( {
                                         ...ROLES,
                                         TASK: 'TASK',
                                       } );

