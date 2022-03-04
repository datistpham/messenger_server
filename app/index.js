import express from 'express'
import cors from 'cors'
import route from '../route/index.js'
import cookieParser from 'cookie-parser'
import { port, secretCookie } from '../enviroment/index.js'
import connectDB from '../database/index.js'
import http from 'http'
import startServer from '../server_apolo/index.js'
import session from 'express-session'

const app= express()
const httpServer= http.createServer(app)

app.use(cookieParser(secretCookie))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secretCookie,
    cookie: { expires: new Date(Date.now() + 9000000), maxAge: 800000}
}))
app.use(cors({  
    credentials: true
}))
app.use("/graphql", express.urlencoded({
    extended: true
}))
app.use("/graphql", express.json())
app.use(express.json({limit: '200mb'}))
app.use(express.urlencoded({
    extended: true,limit: '200mb'
}))
app.use(express.text({limit: '200mb'}))
connectDB()
app.get('/verify/user', (req, res)=> {
    req.session.User = {
        account: req.query.account,
        password: req.query.password,
    }
    return res.status(200).json({status: 'success'})
})
app.use(route)
route.get('/get/verify/user', (req, res)=> {
    console.log(req.session.User)
    return res.status(200).json({status: 'error'})
})
startServer(app)

httpServer.listen(port, ()=> console.log(`Server run on port ${port}`))