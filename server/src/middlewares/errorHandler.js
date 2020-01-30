import ApplicationError from '../utils/application_errors/ApplicationError.js';

export default function (err, req, res, next) {
  if (err instanceof ApplicationError) {

  } else {

  }

}