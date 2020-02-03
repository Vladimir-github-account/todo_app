import AppError from '../../utils/application_errors';

export default object => action => async (req, res, next) => {
  try {

    next( new AppError.ForbiddenError() );
  } catch (e) {
    next( e );
  }
};
