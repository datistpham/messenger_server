import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path, {dirname} from 'path'
const __filename= fileURLToPath(import.meta.url)
const __dirname= dirname(__filename)
const reqPath= path.join(__dirname,'../.env')
dotenv.config({
    path: reqPath
})
export const port= process.env.PORT
export const sender= process.env.SENDER
export const senderPassword= process.env.SENDER_PASSWORD
export const secretCookie= process.env.SECRET_COOKIE
export const endpoint= process.env.ENDPOINT