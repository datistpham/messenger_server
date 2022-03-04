import { connection } from "../database/mysql/setup.js"
export const updateBio= async (req, res, next)=> {
    const idUser= req.body.idUser
    const bio= req.body.bio
    await connection.execute(`update all_user set bio='${bio}' where id='${idUser}'`)
    return res.sendStatus(200)
}