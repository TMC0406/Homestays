

export const changeInfoSevice  = async (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Content-Type:', req.headers['content-type']);
    console.log('Request body:', req.body);
}