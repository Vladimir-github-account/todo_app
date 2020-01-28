export default function (err, req, res, next) {
  res.status( 400 ).send( "Bad Request!" );
}