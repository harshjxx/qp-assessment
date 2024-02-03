const dbConfig = require("../config/db.config");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logQueryParameters: true,
    benchmark:true
});

const modelDefiners = [
    require('./user.model'),
    require('./grocery.model'),
    require('./cart.model')
];


for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
};

(async () => {
    try {
        // await sequelize.sync({alter: true});
        await sequelize.sync({force:true});
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(error);
    } 
}) ();

module.exports = sequelize;