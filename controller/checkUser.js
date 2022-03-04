import { connection } from "../database/mysql/setup.js"
export const checkUser= async (req, res, next)=> {
    const idUser= req.body.idUser
    const idSecret= req.body.idSecret
    const [rows]= await connection.execute(`select firstname from all_user where id='${idUser}' and cookie='${idSecret}'`)
    const result= rows[0].firstname
    if(result !== undefined || result !== "") {
        return res.sendStatus(200)
    }
    return res.sendStatus(201)
}