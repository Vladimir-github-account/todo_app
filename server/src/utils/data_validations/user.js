import Joi                                                    from '@hapi/joi';
import { LOGIN_PATTERN, PASSWORD_PATTERN, USER_NAME_PATTERN } from '../../constants';

const nameSchema = Joi.string().pattern( USER_NAME_PATTERN );
const loginSchema = Joi.string().pattern( LOGIN_PATTERN );
const passwordSchema = Joi.string().pattern( PASSWORD_PATTERN );
const emailSchema = Joi.string().email();

export default Joi.object( {
                             firstName: nameSchema.label( 'First Name' ).when( '$isCreate', {
                               then: nameSchema.required(),
                             } ),
                             lastName: nameSchema.label( 'Last Name' ).when( '$isCreate', {
                               then: nameSchema.required(),
                             } ),
                             login: loginSchema.label( 'Login' ).when( '$isCreate', {
                               then: loginSchema.required(),

                             } ),
                             password: passwordSchema.label( 'Password' ).when( '$isCreate', {
                               then: passwordSchema.required(),
                             } ),
                             email: emailSchema,
                           } ).min( 1 ).max( 5 ).label( 'User' );

