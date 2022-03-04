import { cloudinaryU } from "../../model/cloudinary.js"
export const selfCover= {
    uploadCoverPhoto: async (req, res)=> {
        cloudinaryU.uploadSingle(req.file.path)
        .then(result=> {
            let imageDetails= {
                imageName: req.body.imageName || "",
                cloudImage: result.url,
                imageId: result.id
            }
            return res.json(imageDetails.cloudImage)
        })
    },
    uploadAvatar: async (req, res)=> {
        cloudinaryU.uploadSingle("../images/avatar.png")
        .then(result=> {
            let imageDetails= {
                cloudImage: result.url
            }
            return res.json(imageDetails.cloudImage)
        })
    }
}