require('dotenv').config()

const generateCode = (value) => {
    let output = ''
    let merge = value + process.env.homestay
    let length = merge.length
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(length / 2)
        code += merge.charAt(index) //random index của chuỗi chữ cái ở trên
    }
    return `${code}${number.charAt(Math.floor(Math.random()*number.length))}`
}

export default generateCode