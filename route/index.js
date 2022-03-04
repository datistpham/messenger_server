import express from 'express'
import verifyWithEmail from '../auth/email/index.js'
import { verifyCode } from '../auth/email/index.js'
import { authenticateUser } from '../controller/authenticate_user.js'
// import { authenticationV2 } from '../controller/authentication_user_v2.js'
import checkLogin, {setCookieFor} from '../controller/checkLogin.js'
import { checkUser } from '../controller/checkUser.js'
import { uploadAvatar } from '../controller/controller_upload/controller_upload_avatar.js'
import { selfCover } from '../controller/controller_upload/controller_upload_coverPhoto.js'
import { getTheme } from '../controller/gettheme.js'
import { getThemePost } from '../controller/getThemePost.js'
import { getInfo2, infoUser } from '../controller/infoUser.js'
import { LoginAuto } from '../controller/login_auto.js'
import { getListUser } from '../controller/querysql.js'
import { updateTheme } from '../controller/updateTheme.js'
import { uploadAvatardb } from '../controller/uploadAvatardb.js'
import { updateBio } from '../controller/uploadBio.js'
import { uploadCoverphototoDatabase } from '../controller/uploadCoverphoto_database.js'
import { uploadCoverPhoto } from '../middleware/modelMulter.js'

const route = express.Router()
route.post('/verify/code', verifyWithEmail, (req, res) => {
    res.send('success')
})
route.post('/authentication/verify/confirm', (req, res, next) => {
    if (parseInt(req.body.code) === parseInt(verifyCode) && parseInt(verifyCode) !== 0) {
        res.send("success")
        next()
        return
    }
    if (parseInt(verifyCode) === 0) {
        return res.send("timeout")
    }
    if (parseInt(verifyCode) !== parseInt(req.body.code)) {
        return res.send("failed")
    }

}, (req, res) => {
    
})
route.post('/getlistuser', getListUser)
route.post('/checklogin', checkLogin, setCookieFor)
route.post('/auth/user', authenticateUser)
route.get("/user/loginauto", LoginAuto )
route.get("/id/message", getTheme)
route.post("/update/theme/message", updateTheme)
route.post("/checkuser", checkUser)
route.post("/infouser", infoUser)
route.get("/theme/post", getThemePost)
route.get("/info2/", getInfo2)
route.post("/upload/coverphoto/", uploadCoverPhoto.single("cover_photo"), selfCover.uploadCoverPhoto)
route.post('/upload/coverphoto/db', uploadCoverphototoDatabase )
route.post("/upload/avatar", uploadAvatar, selfCover.uploadAvatar)
route.post("/upload/avatar/db", uploadAvatardb)
route.put("/update/bio", updateBio)

export default route