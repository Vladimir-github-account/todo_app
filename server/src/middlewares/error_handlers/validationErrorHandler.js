import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {

  if (err instanceof ValidationError) {
    const { details: [errorDetails] } = err;

    let errorMessage = '';
    const valueLabel = errorDetails.context.label || 'Property';
    switch (errorDetails.type) {
      case 'any.required': {

        errorMessage = `${valueLabel} is required`;
      }
        break;
      case 'any.invalid':
        errorMessage = `${valueLabel} value is not valid.`;
        break;
      case 'string.pattern.base':
        errorMessage = `${valueLabel} with value \"${errorDetails.context.value}\" fails to match the required pattern.`;
        break;
      default:
        errorMessage = 'Validation failed';
        break;
    }

    return res.status( 400 ).send( errorMessage );

  }
  next( err );
}