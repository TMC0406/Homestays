require('dotenv').config()

const generateCode = (value) => {
    let output = ''
    let merge = value + process.env.homestay
    let length = merge.length
    for (let i = 0; i < 4; i++) {
        code += characters.charAt(Math.floor(Math.random()*characters.length)) //random index của chuỗi chữ cái ở trên

        
    }
    return `${code}${number.charAt(Math.floor(Math.random()*number.length))}`
}

export default generateCode