import AppError from '../../utils/application_errors';

export default function (req, res, next) {
  try {
    req.authorizeData = req.get( 'Authorization' );
    if (req.authorizeData) {
      next();
    } else {
      next( new AppError.UnauthorizedError() );
    }

  } catch (e) {
    next( e );
  }

}