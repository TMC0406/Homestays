import express from 'express'
require('dotenv').config()
import cors from "cors"
import initRouter from './src/routers'
import connectDatabase from './src/config/connectDatabase'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))
//////////
import multer from "multer";
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB
        files: 1,
    },
});
////
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: "drorqx56b",
    api_key: "374587842228277",
    api_secret: "kgicLGGznvwXZedbxsbWeLTKh2M",
});
////
import streamifier from "streamifier";

app.post("/upload", upload.single("file"), async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const uploadToCloudinary = (file) => {
        console.log("file" + file);
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) {
                    console.error("Upload error:", error);
                    reject(error); 
                } else {
                    console.log("Upload successful:", result);
                    resolve(result);
                }
            });
            streamifier.createReadStream(file.buffer).pipe(stream);
        });
    };
    try {
        const result = await uploadToCloudinary(req.file);
        return res.status(201).json({
            url: result.url,
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
});



//Đọc API từ Client gửi lên
app.use(express.json())
app.use(express.urlencoded({extended: true})) //Giúp đọc data dạng form data từ Client gửi lên

initRouter(app)
connectDatabase()

const port = process.env.PORT || 8888 //Nếu cổng 5000 bị lỗi thì tự động chuyển sang cổng 8888
const listener = app.listen(port, () =>{
    console.log(`Server is running on the port ${listener.address().port}`);
})
