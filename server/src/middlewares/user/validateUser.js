import userSchema from '../../utils/dataValidations/user.js';

export default async function (req, res, next) {
  try {

    const { value } = await userSchema.validateAsync( req.body, {
      context: {
        isCreate: req.method === 'POST'
      }
    } );

    req.userValue = value;

    next();

  } catch (e) {

    next( e );
  }
}