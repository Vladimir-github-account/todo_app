import Joi from '@hapi/joi';

export default Joi.object( {
                             value: Joi.string().trim().min( 1 ).max( 255 ).label( 'Value' ).required(
                               '$isCreateMode' ),
                             isDone: Joi.boolean().optional().label( 'Done' ),
                             deadline: Joi.date().greater( 'now' ).label( 'Deadline' ).required( '$isCreateMode' ),
                           } ).min( 1 ).max( 3 );

