import express                                                 from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUser } from '../controllers/user.controller.js';
import createPermissionMW
                                                               from '../middlewares/permissions/createPermissionMW.js';
import createValidationMW                                      from '../middlewares/validations/createValidationMW.js';
import validationSchemas                                       from './../utils/data_validations';
import { ACTIONS, ENTITIES }                                   from '../constants';

const userRouter = express.Router();

const createUserPermissionsMW = createPermissionMW( ENTITIES.USER );
const createUserValidationMW = createValidationMW( validationSchemas.userSchema );

userRouter.post( '',
                 createUserPermissionsMW( ACTIONS.CREATE ),
                 createUserValidationMW( ACTIONS.CREATE ),
                 createUser
);

userRouter.get( '/:userId',
                createUserPermissionsMW( ACTIONS.READ ),
                getUserByPk,
);
userRouter.patch( '/:userId',
                  createUserPermissionsMW( ACTIONS.UPDATE ),
                  createUserValidationMW( ACTIONS.UPDATE ),
                  updateUser
);
userRouter.delete( '/:userId',
                   createUserPermissionsMW( ACTIONS.DELETE ),
                   deleteUserByPk
);

export default userRouter;