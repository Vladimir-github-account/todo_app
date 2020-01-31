import { userSchema } from '../../utils/data_validations';

function getUserValidateMW (isCreate = true) {

  return async (req, res, next) => {
    try {
      req.userData = await userSchema.validateAsync( req.body, {
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
