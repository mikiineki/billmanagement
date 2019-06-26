'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    bill_number: DataTypes.INTEGER,
    bill_amount: DataTypes.FLOAT,
    bill_company: DataTypes.STRING,
    
  }, {});
  Bill.associate = function(models) {
    Bill.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Bill;
};