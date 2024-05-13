const express = require('express');
require('dotenv').config()
const app = express();

// Sử dụng cổng mặc định là 3000 hoặc cổng được xác định bởi biến môi trường
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('hello world');
});

// Khởi động máy chủ và sử dụng callback để console.log cổng đang chạy
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});