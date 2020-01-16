'use strict';
module.exports = (sequelize, DataTypes) => {
  const Following_User = sequelize.define('Following_User', {
    idFollowed: DataTypes.INTEGER,
    idFollower: DataTypes.INTEGER,
    startingDate: DataTypes.DATE
  }, {});
  Following_User.associate = function(models) {
    // associations can be defined here
  };
  return Following_User;
};