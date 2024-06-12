require('dotenv').config()

const generateCode = (value) => {
    let output = ''
    let merge = value + process.env.homestay
    for (let i = 0; i < length - 1; i++) {
        code += characters.charAt(Math.floor(Math.random()*characters.length)) //random index của chuỗi chữ cái ở trên

        
    }
    return `${code}${number.charAt(Math.floor(Math.random()*number.length))}`
}

export default generateCode