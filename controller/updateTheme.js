import { connection } from "../database/mysql/setup.js"
const updateTheme= async (req, res, next)=> {
    const updateTheme= req.body.themeUpdate
    const idMessage= req.body.idMessage
    const themeIg= req.body.themeIg
    await connection.execute(`UPDATE message set theme='${updateTheme}',themeIg='${themeIg}' where id='${idMessage}'`)
    res.sendStatus(200)
}

export { updateTheme }