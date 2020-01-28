import Joi from '@hapi/joi';

const nameSchema = Joi.string().pattern( /^[A-Z][a-z]{0,63}$/ );
const loginSchema = Joi.string().pattern( /(?!^\d)^\w{6,16}$/ );
const passwordSchema = Joi.string().password(
  /(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])^[a-zA-Z_$%@?!#]{8,60}$/ );
const emailSchema = Joi.string().email();

export const createUserSchema = Joi.object( {
                                              firstName: nameSchema.required(),
                                              lastName: nameSchema.required(),
                                              login: loginSchema.required(),
                                              password: passwordSchema.required(),
                                              email: emailSchema,
                                            } ).min( 4 ).max( 5 );

export const updateUserSchema = Joi.object( {
                                              firstName: nameSchema,
                                              lastName: nameSchema,
                                              login: loginSchema,
                                              password: passwordSchema,
                                              email: emailSchema,
                                            } ).min( 1 ).max( 5 );