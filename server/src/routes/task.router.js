import express                                         from 'express';
import { createTask, deleteTask, getTask, updateTask } from '../controllers/task.controller.js';
import createPermissionMW                              from '../middlewares/permissions/createPermissionMW.js';
import { ACTIONS, ENTITIES }                           from '../constants';

const taskRouter = express.Router();

const createTaskPermissionMW = createPermissionMW( ENTITIES.TASK );

taskRouter.post( '',
                 createTaskPermissionMW( ACTIONS.CREATE ),
                 createTask
);
/*
 * only owner
 * */
taskRouter.get( '/:taskId',
                createTaskPermissionMW( ACTIONS.READ ),
                getTask
);
/*
 * only owner
 * */
taskRouter.patch( '/:taskId',
                  createTaskPermissionMW( ACTIONS.UPDATE ),
                  updateTask
);
/*
 * only owner
 * */
taskRouter.delete( '/:taskId',
                   createTaskPermissionMW( ACTIONS.DELETE ),
                   deleteTask
);

export default taskRouter;

