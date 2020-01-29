import { User } from './../db/models';

export async function createUser (req, res, next) {
  try {
    const createdUser = await User.create( req.userValue );
    if (createdUser) {
      const data = createdUser.get();
      delete data.password;
      return res.status( 201 ).send( data );
    }
  } catch (e) {
    next( e );
  }
}