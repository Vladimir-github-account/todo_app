import { Task } from '../models';
import AppError from '../utils/application_errors';

export async function createTask (req, res, next) {
  try {

    const { body: taskData, authorizationData: { id: userId } } = req;

    const createdTask = await Task.create( {
                                             ...taskData,
                                             userId,
                                           } );
    if (createdTask) {
      return res.status( 201 ).send( createdTask );
    }
    next( new AppError.BadRequestError() );
  } catch (e) {
    next( e );
  }
}

export async function getTask (req, res, next) {
  try {
    const { params: { taskId } } = req;

    const task = await Task.findByPk( taskId );
    if (task) {
      return res.send( task );
    }
    next( new AppError.NotFoundError( 'Task' ) );

  } catch (e) {
    next( e );
  }
}

export async function updateTask (req, res, next) {
  try {
    const { params: { taskId } } = req;

    const [updatedRowsCount, [updatedTask]] = await Task.update( {
                                                                   where: {
                                                                     id: taskId
                                                                   },
                                                                   returning: true
                                                                 } );
    if (updatedRowsCount) {
      return res.send( updatedTask );
    }
    next( new AppError.NotFoundError( 'Task' ) );

  } catch (e) {
    next( e );
  }
}

export async function deleteTask (req, res, next) {
  try {
    const { params: { taskId } } = req;

    const deletedRowsCount = await Task.destroy( {
                                                   where: {
                                                     id: taskId
                                                   }
                                                 } );
    if (deletedRowsCount) {
      return res.send( {
                         deletedRowsCount,
                       } );
    }
    next( new AppError.NotFoundError( 'Task' ) );

  } catch (e) {
    next( e );
  }
}