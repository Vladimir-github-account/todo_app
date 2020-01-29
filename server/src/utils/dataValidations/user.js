import Joi                                                    from '@hapi/joi';
import { LOGIN_PATTERN, PASSWORD_PATTERN, USER_NAME_PATTERN } from '../../constants';

const nameSchema = Joi.string().pattern( USER_NAME_PATTERN );
const loginSchema = Joi.string().pattern( LOGIN_PATTERN );
const passwordSchema = Joi.string().pattern( PASSWORD_PATTERN );
const emailSchema = Joi.string().email();

export default Joi.object( {
                             firstName: Joi.when( '$isCreate', {
                               then: nameSchema.required(),
                               otherwise: nameSchema
                             } ),
                             lastName: Joi.when( '$isCreate', {
                               then: nameSchema.required(),
                               otherwise: nameSchema
                             } ),
                             login: Joi.when( '$isCreate', {
                               then: loginSchema.required(),
                               otherwise: loginSchema
                             } ),
                             password: Joi.when( '$isCreate', {
                               then: passwordSchema.required(),
                               otherwise: passwordSchema
                             } ),
                             email: emailSchema,
                           } ).min( 1 ).max( 5 );

