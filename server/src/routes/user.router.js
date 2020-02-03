import express                                                 from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUser } from '../controllers/user.controller.js';
import createValidationMW                                      from '../middlewares/validations/createValidationMW.js';
import validationSchemas                                       from './../utils/data_validations';
import { ACTIONS }                                             from '../constants';

const createUserValidationMW = createValidationMW( validationSchemas.userSchema );

const userRouter = express.Router();

userRouter.post( '',
                 createUserValidationMW( ACTIONS.CREATE ),
                 createUser
);

userRouter.get( '/:userId',
                getUserByPk,
);
userRouter.patch( '/:userId',
                  createUserValidationMW( ACTIONS.UPDATE ),
                  updateUser
);
userRouter.delete( '/:userId',
                   deleteUserByPk
);

export default userRouter;