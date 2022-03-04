import { connection } from "../database/mysql/setup.js"

const setCookieFor= async (req, res, next)=> {
    const account= req.account
    const password= req.password
    res.sendStatus(200)
}

export { setCookieFor }
const checkLogin= async (req, res,next )=> {
    const account= req.body.account
    const password= req.body.password
    const [rows]= await connection.execute(`SELECT firstname, surname, avatar, id from all_user where ((email='${account}' or phonenumber='${account}') and password='${password}')`)
    if(rows.length > 0 ) {
        req.account= account
        req.password= password
        next()
        return
    }
    else {
        return res.sendStatus(207)
    }
}

export default checkLogin