import axiosConfig from "../axiosConfig"
export const changeInfo = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/changeInfo',
            data: payload
        });

        if (response.status === 200) {
            console.log(response);
            resolve(response);
        } else {
            const errorMessage = "Có lỗi xảy ra khi thay đổi thông tin";
            console.error(errorMessage);
            reject(errorMessage);
        }
    } catch (error) {
        console.error(error);
        reject("Có lỗi xảy ra khi gọi API");
    }
});