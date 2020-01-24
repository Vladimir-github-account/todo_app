import {User} from './db/models';


async function test () {
  const usersId = await User.findAll( {
                                        attributes: ['id'],
                                      } );
  console.log(usersId)
}

