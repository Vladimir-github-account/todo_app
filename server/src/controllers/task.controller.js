import { Task } from '../models';
import AppError from '../utils/application_errors';

export async function createTask (req, res, next) {
  try {

    const { authorizationData: { id: ownerId } } = req;

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