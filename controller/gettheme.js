import { connection } from "../database/mysql/setup.js"

const getTheme= async (req, res, next)=> {
    const idMessage= req.query.idmessage
    const [rows ]= await connection.execute(`SELECT theme, themeIg from message where id='${idMessage}'`)
    res.send(rows)
}

export { getTheme }