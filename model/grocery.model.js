const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define("Grocery", {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.BIGINT
        },
        grocery_name: {
            allowNull:false,
            type:DataTypes.STRING,
            validate: {
				// We require grocery_name to have length of at least 3, and
				// only use letters, numbers and underscores.
				is: /^\w{3,}$/
			}
        },
        grocery_price: {
            allowNull:false,
            type:DataTypes.INTEGER
        }
    })
}