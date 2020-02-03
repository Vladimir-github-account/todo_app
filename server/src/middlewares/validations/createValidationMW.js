import { ACTIONS }    from '../../constants';

/**
 *
 * @param validationSchema
 * @return {function(action: Action): function(req, res, next):undefined}
 */
export default function (validationSchema) {

  /**
   * @param {Action} action
   * @return {function(req, res, next):void}
   */
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


