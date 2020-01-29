import express                                                from 'express';
import { createUser, updateUser }                             from '../controllers/user.controller.js';
import { validateUserDataOnCreate, validateUserDataOnUpdate } from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserDataOnCreate,
                 createUser
);

userRouter.patch( '/:userId',
                  validateUserDataOnUpdate,
                  updateUser
);

export default userRouter;