import mysql2 from 'mysql2'

const withmysql2= async ()=> {
    const mysql= mysql2
    const pool= mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: "user_messenger",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
    console.log("Connect to mysql successfully")
}
export { withmysql2 }

