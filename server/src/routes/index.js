import express       from 'express';
import userRouter    from './user.js';
import authorizeUser from '../middlewares/authorization/authorizeUser.js';

const router = express.Router();

router.use( '*', authorizeUser );

router.use( '/user', userRouter );

export default router;
