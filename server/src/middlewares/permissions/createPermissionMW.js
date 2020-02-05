import AppError from '../../utils/application_errors';

export default function (entity) {
  return function (action) {
    return async (req, res, next) => {
      try {

        next();
      } catch (e) {
        next( e );
      }
    };
  };
}

