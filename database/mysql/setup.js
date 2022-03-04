import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

export const connection=  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "user_messenger",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    Promise: bluebird
})
console.log("Connect to mysql successfully")