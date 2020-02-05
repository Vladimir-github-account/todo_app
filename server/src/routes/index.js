import express                from 'express';
import userRouter             from './user.router.js';
import checkUserAuthorization from '../middlewares/authorizations/checkUserAuthorization.js';
import taskRouter             from './task.router.js';
import tasksRouter            from './tasks.router.js';

const router = express.Router();

router.use( checkUserAuthorization );

router.use( '/user', userRouter );
router.use( '/task', taskRouter );
router.use( '/tasks', tasksRouter );

export default router;
