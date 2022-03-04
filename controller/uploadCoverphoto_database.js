import { connection } from "../database/mysql/setup.js"

export const uploadCoverphototoDatabase= async (req, res, next)=> {
    const idUser= req.body.idUser
    const cover_photo= req.body.cover_photo
    await connection.execute(`UPDATE all_user set cover_photo='${cover_photo}' where id='${idUser}'`)
    return 
}