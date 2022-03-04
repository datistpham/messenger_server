import { connection } from "../database/mysql/setup.js"

const LoginAuto= async (req, res)=> {
    const cookie_= req.query.user
    // console.log(cookie_)
    const [rows ]= await connection.execute(`SELECT firstname, surname, avatar, id from all_user where cookie='${cookie_}'`)
    return res.send(rows)
}

export { LoginAuto }