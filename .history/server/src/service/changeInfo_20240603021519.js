
import db from "../models"
import bcrypt from "bcryptjs"
import {uploadToCloudinary } from "../service/uploadService"
export const changeInfoController = async (req, res) => {
    const { id, password } = req.body;
    const avatarFile = req.file;
    try {
        // Kiểm tra xem có file avatar được tải lên hay không
        if (!avatarFile) {
            throw new Error('No avatar file uploaded');
        }
        // Tải avatar lên Cloudinary
        const uploadResult = await uploadToCloudinary(avatarFile);
        // Lấy URL của ảnh đã tải lên từ Cloudinary
        const avatarUrl = uploadResult.url;
        console.log(avatarUrl);
        // Cập nhật thông tin người dùng với avatar mới
        const updatedUser = await changeInfo({ id, password, avatar: avatarUrl });
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error in controller:', error);
        return res.status(500).json({ error: error.message });
    }
};