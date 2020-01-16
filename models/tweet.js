'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});

  Tweet.associate = function(models) {
    
    Tweet.hasMany(models.User, {
      foreignKey:'tweetId'
    });
  
  };
  return Tweet;
};