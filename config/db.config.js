module.exports = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:"password123",
    DB: "node_app",
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}