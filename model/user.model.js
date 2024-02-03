const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define("User", {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.BIGINT
        },
        username: {
            allowNull:false,
            type:DataTypes.STRING,
            validate: {
				// We require usernames to have length of at least 3, and
				// only use letters, numbers and underscores.
				is: /^\w{3,}$/
			}
        },
        password: {
            allowNull:false,
            type:DataTypes.STRING
        },
        email: {
            allowNull:false,
            type:DataTypes.STRING,
            unique: true,
            isEmail:true
        },
        isAdmin: {
            allowNull: false,
            type:DataTypes.STRING,
            defaultValue: 'user'
        }
    })
}