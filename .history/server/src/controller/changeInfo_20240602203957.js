import * as changeInfoService from "../service/changeInfo"

export const changeInfo  = async (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Request body:', req.body);
}