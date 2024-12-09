import { app } from './app.js'
import connectDB from './database/image.database.js'
import dotenv from "dotenv"
dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000)
        console.log(`\nServer has started on PORT ${process.env.PORT}`);
    })
    .catch((err) => { console.log("MONGO ERROR: " + err); })