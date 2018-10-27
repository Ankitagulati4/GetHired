const Sequelize = require('sequelize')

const db = new Sequelize('queryapp', 'queryuser', 'pass1', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    },
    operatorsAliases: false
})

const Query = db.define('queries', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    query: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
    }
})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Query
}