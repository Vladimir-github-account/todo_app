import express      from 'express';
import { getTasks, deleteTasks } from '../controllers/task.controller.js';

const tasksRouter = express.Router();

tasksRouter.get( '', getTasks );
tasksRouter.delete( '', deleteTasks );

export default tasksRouter;

