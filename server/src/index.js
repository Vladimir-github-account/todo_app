import express                 from 'express';
import cors                    from 'cors' ;
import router                  from './routes';
import applicationErrorHandler from './middlewares/error_handlers/applicationErrorHandler.js';
import sequelizeErrorHandler   from './middlewares/error_handlers/sequelizeErrorHandler.js';

/*
 * defining server port
 * */
const PORT = process.env.PORT || 5000;

/*
 * create server instance
 * */
const app = express();

/*
 * set cors headers
 * */
app.use( cors() );
/*
 * allows Content-type: application/json
 * */
app.use( express.json() );

/*
 * routing
 * */
app.use( router );

/*
 * error handling
 * */

app.use( applicationErrorHandler );
app.use( sequelizeErrorHandler );
app.use( (err, req, res) => {
  return res.status( 500 ).send( 'Internal server error' );
} );

/*
 * start listening
 * */
app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );