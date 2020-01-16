'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});

  Tweet.associate = function(models) {
    
    Tweet.belongsTo(models.User);
  
  };
  return Tweet;
};