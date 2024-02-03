const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define("Cart", {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.BIGINT
        },
        user_id: {
            allowNull:false,
            type:DataTypes.INTEGER
        },
        cart_details: {
            allowNull:false,
            type:DataTypes.STRING
        }
        
    })
}