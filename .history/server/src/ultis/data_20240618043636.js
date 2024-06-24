import generateCode from "./generateCode"

const prices = [
    'Dưới 1 triệu',
    'Từ 2-3 triệu', 
    'Từ 3-5 triệu',
    'Từ 5-7 triệu', 
    'Từ 7-10 triệu', 
    'Từ 10-15 triệu', 
    'Trên 15 triệu'
]

export const dataPrice = prices.map(item => ({
    code: generateCode(item),
    value: item
}))