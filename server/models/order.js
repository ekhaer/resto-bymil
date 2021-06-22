'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Menu)
    }
  };
  Order.init({
    TableId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    status: {
      type : DataTypes.STRING,
      defaultValue : "active"
    }
    }, 
    {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};