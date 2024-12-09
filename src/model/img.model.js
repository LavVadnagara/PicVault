import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    image:{
        type:String,
        required: true,
    }
}, { timestamps: true, }
)

export const ImgDB = mongoose.model("ImageDB", ImageSchema)