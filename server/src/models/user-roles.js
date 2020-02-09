'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define('UserRoles', {
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    roleId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Role',
        key: 'id',
      }
    }
  }, {
    timestamps: true
  });
  UserRoles.associate = function(models) {
    UserRoles.hasMany( models.User, {
      foreignKey: 'userId',
    } );
    UserRoles.hasMany( models.Role, {
      foreignKey: 'roleId',
    } );
  };
  return UserRoles;
};