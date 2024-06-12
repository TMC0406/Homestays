import * as changeInfoService from "../service/changeInfo"

export const changeInfo  = async (req, res) => {
    try{
        console.log(req);
        // const response =  await changeInfoService.changeInfoService(req.body)
        // console.log(response);
    }catch(error) {
        return res.status(500).json({
            err: -1, //Lỗi số âm là lỗi Server còn 0 là thành công
            msg: "Fall at controller: " + error
        })
    }
}