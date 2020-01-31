import express from 'express';

const taskRouter = express.Router();

taskRouter.post( '', );
/*
 * only owner
 * */
taskRouter.get( '/:taskId', );
/*
 * only owner
 * */
taskRouter.patch( '/:taskId', );
/*
 * only owner
 * */
taskRouter.delete( '/:taskId', );

export default taskRouter;

