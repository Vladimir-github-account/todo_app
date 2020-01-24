import { Sequelize, User, Task, sequelize } from './db/models';

const Op = Sequelize.Op;

async function getAllUsersWithTasks () {
  try {

    const users = await User.findAll( {
                                        where: {
                                          id: {
                                            [Op.in]: [254, 5, 45, 4, 51, 21, 5, 45, 1]
                                          }
                                        },
                                        include: [
                                          {
                                            model: Task,
                                            as: 'tasks'
                                          }]
                                      } );

    return users.map( user => user.toJSON() );

  } catch (e) {

  }
}

getAllUsersWithTasks().then(
  console.log
).catch( console.error );