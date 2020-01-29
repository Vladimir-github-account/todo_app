import userSchema  from '../../utils/dataValidations/user.js';

function getUserValidateMW (isCreate = true) {

  return async (req, res, next) => {
    try {
      const { value } = await userSchema.validateAsync( req.body, {
        context: {
          isCreate,
        }
      } );
      req.userValue = value;
      next();
    } catch (e) {
      next( e );
    }
  };
}

export const validateUserDataOnCreate = getUserValidateMW();
export const validateUserDataOnUpdate = getUserValidateMW( false );
