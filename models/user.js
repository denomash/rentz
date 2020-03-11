'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      zipCode: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
