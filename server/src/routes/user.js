import express                                                 from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUser } from '../controllers/user.controller.js';
import { validateUserDataOnCreate, validateUserDataOnUpdate }  from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserDataOnCreate,
                 createUser
);

userRouter.get( '/:userId',
                getUserByPk,
);
userRouter.patch( '/:userId',
                  validateUserDataOnUpdate,
                  updateUser
);
userRouter.delete( '/:userId',
                   deleteUserByPk
);


export default userRouter;