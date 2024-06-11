
export const path = {
    HOME: '/',
    LOGIN: '/login',
    CHO_THUE_CAN_HO: '/cho-thue-can-ho',
    CHO_THUE_PHONG_TRO: '/cho-thue-phong-tro',
    NHA_CHO_THUE: '/nha-cho-thue'
}


// export const formatVietnameseToString = (keyword) => {
//     return keyword
//         .toLowerCase()
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .split(" ")
//         .join("-")
// }

export const location = [
    {
        id: 'hcm',
        name: 'Phòng trọ Hồ Chí Minh',
        img: 'https://phongtro123.com/images/location_hcm.jpg'
    },
    {
        id: 'hn',
        name: 'Phòng trọ Hà Nội',
        img: 'https://phongtro123.com/images/location_hn.jpg'
    },
    {
        id: 'dn',
        name: 'Phòng trọ Đà Nẵng',
        img: 'https://phongtro123.com/images/location_dn.jpg'
    }
]