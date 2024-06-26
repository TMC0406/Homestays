import express from 'express'
require('dotenv').config()
import cors from "cors"

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

//Đọc API từ Client gửi lên
app.use(express.json())
app.use(express.urlencoded(extended: true)) //Giúp đọc data dạng form data từ Client gửi lên
app.use('/', (req, res) => {
    res.send('Server on....')
})

const port = process.env.PORT || 8888
const listener = app.listen(port, () =>{
    console.log(`Server is running on the port ${listener.address().port}`);
})