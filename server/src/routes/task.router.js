import express                                         from 'express';
import { createTask, deleteTask, getTask, updateTask } from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.post( '', createTask );
/*
 * only owner
 * */
taskRouter.get( '/:taskId', getTask );
/*
 * only owner
 * */
taskRouter.patch( '/:taskId', updateTask );
/*
 * only owner
 * */
taskRouter.delete( '/:taskId', deleteTask );

export default taskRouter;

