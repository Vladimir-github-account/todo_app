'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( 'User', {
    firstName: {
      type: DataTypes.STRING( 64 ),
      is: /[A-Z][a-z]*/,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING( 64 ),
      is: /[A-Z][a-z]*/,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      is: /^[^ ^()*&?|\\/]{6,16}$/,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      isEmail: true,
    }
  }, {} );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};