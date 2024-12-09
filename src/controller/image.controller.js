import { ImgDB } from "../model/img.model.js";
import { APIerror } from "../utils/APIerror.js";
import { uploadOncloudinary } from "../utils/cloudinary.js";

const ImageUpload = async (req, res) => {
    try {
        const ImageLocalPath = req.files?.image[0]?.path
        if (!ImageLocalPath) throw new APIerror(400, "Any image is not found")

        const image = await uploadOncloudinary(ImageLocalPath)
        if (!image) throw new APIerror(400, "Image is required")

        const newImage = await ImgDB.create({ image: image.url });
        if (!newImage) { res.status(400).json({ error: "something is wrong" }); }

        const file = req.files.image[0];
        console.log(`Uploaded file name: ${file.originalname}`);

        return res.status(200).json({
            success: true,
            message: "New image uploaded successfully",
            fileName: file.originalname,
            data: newImage,
        });

    } catch (error) {
        console.log("Error Message: ",error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const DisplayImages = async (req, res) => {
    try {
        const DISimg = await ImgDB.find({})

        return res.status(201).json({
            success: true,
            message: "Image retrieved successfully",
            data: DISimg,
        });
    } catch (error) {
        console.error("Error generated: " + error.message);
        res.status(500).json({ error: "Error in server: " + error.message });
    }
}

export { ImageUpload, DisplayImages }