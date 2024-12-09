import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`\nMongoDB connected!! \nDatabase HOST: ${connectInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB Connection failed and Error: \n", error.message);
    }
}

export default connectDB