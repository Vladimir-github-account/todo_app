import express                                         from 'express';
import { createTask, deleteTask, getTask, updateTask } from '../controllers/task.controller.js';
import checkOwnerMW                                    from '../middlewares/authorizations/checkOwnerAuthorization'
import createPermissionMW                              from '../middlewares/permissions/createPermissionMW.js';
import { ACTIONS, ENTITIES }                           from '../constants';

const taskRouter = express.Router();

const createTaskPermissionMW = createPermissionMW( ENTITIES.TASK );

taskRouter.post( '',
                 checkOwnerMW,
                 createTaskPermissionMW( ACTIONS.CREATE ),
                 createTask
);
/*
 * only owner
 * */
taskRouter.get( '/:taskId',
                checkOwnerMW,
                createTaskPermissionMW( ACTIONS.READ ),
                getTask
);
/*
 * only owner
 * */
taskRouter.patch( '/:taskId',
                  checkOwnerMW,
                  createTaskPermissionMW( ACTIONS.UPDATE ),
                  updateTask
);
/*
 * only owner
 * */
taskRouter.delete( '/:taskId',
                   checkOwnerMW,
                   createTaskPermissionMW( ACTIONS.DELETE ),
                   deleteTask
);

export default taskRouter;

