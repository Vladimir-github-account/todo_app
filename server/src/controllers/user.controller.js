import { User } from './../db/models';

export async function createUser (req, res, next) {
  try {
    const createdUser = await User.create( req.userData );
    if (createdUser) {
      const data = createdUser.get();
      delete data.password;
      return res.status( 201 ).send( data );
    }
  } catch (e) {
    next( e );
  }
}

export async function updateUser (req, res, next) {
  try {
    const [updatedRowsCount, updatedRows] = await User.update( req.userData, {
      where: {
        id: req.params.userId
      },
      returning: true,
    } );

    if (updatedRowsCount) {
      return res.send( updatedRows[0] );
    }
    next( new Error() );
  } catch (e) {
    next( e );
  }
}
