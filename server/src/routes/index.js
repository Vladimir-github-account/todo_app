import express                from 'express';
import userRouter             from './user.js';
import checkUserAuthorization from '../middlewares/authorization/checkUserAuthorization.js';

const router = express.Router();

router.use( checkUserAuthorization );

router.use( '/user', userRouter );

export default router;
