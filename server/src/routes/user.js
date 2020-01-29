import express                      from 'express';
import { createUser }               from '../controllers/user.controller.js';
import { validateUserDataOnCreate } from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserDataOnCreate,
                 createUser
);

export default userRouter;