import { connection } from "../database/mysql/setup.js"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
export const infoUser= async (req, res, next)=> {
    const idUser= req.body.idUser
    const [rows]= await connection.execute(`SELECT firstname, surname from all_user where id='${idUser}'`)
    if(rows[0].firstname !== "" || rows[0].firstname !== undefined) {
        const firstname= `${rows[0].firstname}`
        const surname= `${rows[0].surname}`
        const nameF= capitalizeFirstLetter(firstname)
        const nameS= capitalizeFirstLetter(surname)
        const Fname= `${nameF} ${nameS}`
        return res.send(Fname)
    }
    else {
        return res.sendStatus(301)
    }
}
export const getInfo2= async (req, res, next)=> {
    const idUser= req.query.idUser
    const [rows]= await connection.execute(`SELECT avatar, cover_photo, id, bio from all_user where id='${idUser}'`)
    return res.send(rows)
}