'use strict';
import { LOGIN_PATTERN, PASSWORD_PATTERN, USER_NAME_PATTERN } from '../../constants';

const bcrypt = require( 'bcrypt' );

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( 'User', {
    firstName: {
      type: DataTypes.STRING( 64 ),
      is: USER_NAME_PATTERN,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING( 64 ),
      is: USER_NAME_PATTERN,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      is: LOGIN_PATTERN,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set (value) {
        this.setDataValue( 'password', bcrypt.hashSync( value, 10 ) );
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      isEmail: true,
    }
  }, {} );

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare( password, this.password )
                 .then( res => res );
  };

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany( models.Task, {
      foreignKey: 'userId',
      as: 'tasks'
    } );
  };
  return User;
};