import cloudinary from 'cloudinary'
import fs from 'fs'

const cloundinarys= cloudinary.v2
cloundinarys.config({
    cloud_name: 'cockbook',
    api_key: 362125891568421,
    api_secret: "kR3bk36ysLWcYuKLy-MN9otXogM"
})

export const cloudinaryU= {
    uploadSingle: (file)=> {
        return new Promise(resolve=> {
            cloundinarys.uploader.upload(file, {
                folder: 'single'
            })
            .then(result=> {
                if(result) {
                    fs.unlinkSync(file)
                }
                resolve({
                    url: result.secure_url
                })
            })
        })
    },
    uploadMultiple: (file)=> {
        return new Promise(resolve=> {
            cloundinarys.uploader.upload(file, {
                folder: 'multiple'
            })
            .then(result=> {
                if(result) {
                    fs.unlinkSync(file)
                }
                resolve({
                    url: result.secure_url,
                    id: result.public_id,
                    main: cloudinaryU.reSizeImage(result.public_id, 500, 500)
                })
            })
        })
    },
    reSizeImage: (id, w, h)=> {
        return cloundinarys.url(id, {
            height: h,
            width: w,
            crop: 'scale',
            format: 'jpg'
        })
    }
}