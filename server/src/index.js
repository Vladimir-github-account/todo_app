import express      from 'express';

const cors = require( 'cors' );
import router       from './routes';
import errorHandler from './middlewares/errorHandler.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use( cors() );
app.use( express.json() );//Content-type: application/json

app.use( router );
app.use( errorHandler );
app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );