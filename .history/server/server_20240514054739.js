// import express from 'express'
// require('dotenv').config()
// import cors from "cors"
// import initRouter from './src/routers'
// import connectDatabase from './src/config/connectDatabase'

// const app = express()
// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     methods: ['POST', 'GET', 'PUT', 'DELETE']
// }))

// //Đọc API từ Client gửi lên
// app.use(express.json())
// app.use(express.urlencoded({extended: true})) //Giúp đọc data dạng form data từ Client gửi lên

// initRouter(app)
// connectDatabase()

// const port = process.env.PORT || 8888 //Nếu cổng 5000 bị lỗi thì tự động chuyển sang cổng 8888
// const listener = app.listen(port, () =>{
//     console.log(`Server is running on the port ${listener.address().port}`);
// })
const express = require('express');
const app = express();

// Sử dụng cổng mặc định là 3000 hoặc cổng được xác định bởi biến môi trường
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hello world');
});

// Khởi động máy chủ và sử dụng callback để console.log cổng đang chạy
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});