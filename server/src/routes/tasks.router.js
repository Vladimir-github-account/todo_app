import express      from 'express';
import { getTasks } from '../controllers/task.controller.js';

const tasksRouter = express.Router();

tasksRouter.get( '', getTasks );

export default tasksRouter;

