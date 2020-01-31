import { Task } from '../models';

export async function createTask (req, res, next) {
  try {

    const { authorizationData: { id: ownerId } } = req;

  } catch (e) {
    next( e );
  }
}