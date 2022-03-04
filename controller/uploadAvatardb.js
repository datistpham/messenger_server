import { connection } from "../database/mysql/setup.js"
export const uploadAvatardb= async (req, res, next)=> {
    const avatar= req.body.avatar
    const idUser= req.body.idUser
    await connection.execute(`UPDATE all_user set avatar='${avatar}' where id='${idUser}'`)
    const [rows]= await connection.execute(`SELECT avatar from all_user where id='${idUser}'`)
    return res.send(rows[0].avatar)
}