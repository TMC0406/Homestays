import * as authService from "../service/auth"

export const register  = async (req, res) => {
    const {name, phone, password} = req.body
    try{
        if (name ) {
            return res.status(400).json({
                err: 1, //Lỗi số dương thì là lỗi Client còn 0 là thành công
                msg: 'Missing input!'
            })}else{
                return "ko cÓ loi"
            }
        const response =  await authService.registerService(req.body) 
        return res.status(200).json(response)

    }catch(error) {
        // return res.status(500).json({
        //     err: -1, //Lỗi số âm là lỗi Server còn 0 là thành công
        //     msg: "Fall at controller: " + error
        // })
        return req.body
    }
}