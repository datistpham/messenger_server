import { connection } from "../database/mysql/setup.js"
export const getThemePost= async (req, res, next)=> {
    const [rows]= await connection.execute("SELECT theme,thumbnail from theme_post")
    return res.send(rows)
}