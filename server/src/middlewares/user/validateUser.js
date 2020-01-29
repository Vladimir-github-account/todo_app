import userSchema from '../../utils/dataValidations/user.js';

function getUserValidateMW (isCreate = true) {

  return async (req, res, next) => {
    try {
      req.userValue = await userSchema.validateAsync( req.body, {
        context: {
          isCreate,
        }
      } );
      next();
    } catch (e) {
      next( e );
    }
  };
}

export const validateUserDataOnCreate = getUserValidateMW();
export const validateUserDataOnUpdate = getUserValidateMW( false );
