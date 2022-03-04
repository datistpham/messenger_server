import multer from 'multer'

const storage= multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './upload_cover_photo/')
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    }
})

const uploadCoverPhoto= multer({storage: storage})

export { uploadCoverPhoto }