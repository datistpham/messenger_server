import mime from 'mime'
import fs from 'fs'
export const uploadAvatar= async (req, res, next)=> {
    let matches= req.body.base64image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    let response= {}
    if(matches.length!==3 ) {
        return new Error("Invalid input string")
    } 
    response.type= matches[1]
    response.data= Buffer.from(matches[2], 'base64')
    let decodedImg= response
    let imageBuffer= decodedImg.data
    let type= decodedImg.type
    let extension1= mime.getExtension(type)
    let filename= "avatar." + extension1
    try {
        fs.writeFileSync("../images/"+ filename, imageBuffer, 'utf-8')
        next()
    } catch (error) {
        next(error)
    }
}