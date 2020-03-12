'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    'Application',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNimber: DataTypes.STRING,
      address: DataTypes.STRING,
      zipCode: DataTypes.INTEGER
    },
    {}
  );
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};
