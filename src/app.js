import express from "express";
import userRouter from "./routes/img.routes.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("frontend"))

app.use("/api/users", userRouter)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser())

// app.use(cors());

app.use(cors({
     origin: process.env.CORS_ORIGIN,
     credentials: true
 }))

export { app }