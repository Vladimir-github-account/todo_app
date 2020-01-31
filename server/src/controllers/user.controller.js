import { User }  from '../models';
import AppErrors from '../utils/application_errors';

export async function createUser (req, res, next) {
  try {

    const { body: userData } = req;

    const createdUser = await User.create( userData );
    if (createdUser) {
      const data = createdUser.get();
      delete data.password;
      return res.status( 201 ).send( data );
    }
    next( new AppErrors.BadRequestError() );
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
      const data = updatedRows[0].get();
      delete data.password;
      return res.send( data );
    }
    next( new AppErrors.NotFoundError( 'User' ) );
  } catch (e) {
    next( e );
  }
}

export async function getUserByPk (req, res, next) {
  try {

    const foundUser = await User.findByPk( req.params.userId, {
      attributes: {
        exclude: ['password']
      }
    } );

    if (foundUser) {
      return res.send( foundUser );
    }
    next( new AppErrors.NotFoundError( 'User' ) );
  } catch (e) {
    next( e );
  }
}

export async function deleteUserByPk (req, res, next) {
  try {
    const deletedRowCount = await User.destroy( {

                                                  where: {
                                                    id: req.params.userId
                                                  }
                                                } );
    if (deletedRowCount) {
      return res.send( `${deletedRowCount}` );
    }
    next( new AppErrors.NotFoundError( 'User' ) );
  } catch (e) {
    next( e );
  }
}
