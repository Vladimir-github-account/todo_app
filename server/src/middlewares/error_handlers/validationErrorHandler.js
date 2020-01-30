import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {

  if (err instanceof ValidationError) {

    return res.status( 400 ).send( `${err.details[0].path[0]} value is not valid.` );

  }
  next( err );
}