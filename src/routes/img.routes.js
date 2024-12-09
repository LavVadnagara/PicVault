import { Router } from "express";
import { ImageUpload, DisplayImages } from "../controller/image.controller.js"
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route('/imgupload').post(
    upload.fields([{
        name: "image",
        maxCount: 1
    },
    ]), ImageUpload)

router.route('/GetImages').get(DisplayImages)

export default router
