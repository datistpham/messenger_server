import { connection } from "../database/mysql/setup.js"

const authenticateUser= async (req, res)=> {
    // console.log(req.signedCookies._s_ID)
   if(req.signedCookies._s_ID !== undefined) {
        const cookie= req.signedCookies._s_ID
        const user= cookie.split(" ")
        const [rows, fields] = await connection.execute(`SELECT firstname, surname, avatar, id from all_user where ((account='${user[0]}' or phonenumber='${user[0]}') and password='${user[1]}')`)
        // console.log(rows)
        return res.sendStatus(200)
    }
    else {
        return res.sendStatus(301)
    }
}

export { authenticateUser }