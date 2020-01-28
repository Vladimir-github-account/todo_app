import express from 'express';

const cors = require( 'cors' );
import router  from './routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use( cors() );
app.use( express.json() );//Content-type: application/json

app.use( router );

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );