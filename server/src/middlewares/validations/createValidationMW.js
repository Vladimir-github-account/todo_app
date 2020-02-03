import { ACTIONS } from '../../constants';

/**
 *
 * @param validationSchema
 * @return {function(*=): function(...[*]=)}
 */
export default function (validationSchema) {

  return (action = ACTIONS.CREATE) => {
    return async (req, res, next) => {
      try {
        req.body = await validationSchema.validateAsync( req.body, {
          context: {
            isCreateMode: action === ACTIONS.CREATE,
          }
        } );
        next();
      } catch (e) {
        next( e );
      }
    };
  };
}


