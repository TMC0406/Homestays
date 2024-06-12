import { uploadToCloudinary } from "..//service/uploadService";

export const uploadFile =async (req, res, next) => {
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
}