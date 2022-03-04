import { connection } from "../database/mysql/setup.js"

const getListUser= async (req, res)=> {
    const input= req.body.listuser
    // console.log(input)
    if(input.length>0) {
        const convertinput= (`'${input.join("','")}'`)
        // console.log(convertinput)  
        const [rows ]= await connection.execute(`SELECT firstname, surname, avatar, id from all_user where id in (${convertinput}) order by field(id,${convertinput})`)
        // console.log(rows)
        return res.send(rows)
    }
}

export { getListUser }

