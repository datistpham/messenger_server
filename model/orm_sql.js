import Sequelize from 'sequelize'

const db= {}

const sequelize= new Sequelize(
    'user_messenger',
    'all_user',
    '', {
        host: 'localhost', 
        port: 8000,
        dialect: 'mysql', 
        define: {
            freezeTableName: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
)