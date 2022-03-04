import nodemailer from 'nodemailer'
import { sender, senderPassword } from '../../enviroment/index.js'

const transporter= nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: sender,
        pass: senderPassword
    }
})
const getRandomArbitrary=(min, max)=> {
    return Math.ceil(Math.random() * (max - min) + min)
}
let verifyCode= 0
const verifyWithEmail=  (req, res, next)=> {
    verifyCode = getRandomArbitrary(100000,1000000)  
    console.log(verifyCode) 
    setTimeout(()=> {
        verifyCode =0
    },30000)
    const mailOptions= {
        from: sender,
        to: `${req.body.email}`,
        subject: 'Verify code',
        html: `<p>Your verify code is <strong>${verifyCode}</strong></p>`
    }  
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) console.log(err)
        console.log('Email is sent successfully.')
        next()
    })
}
export { verifyCode }
export default verifyWithEmail