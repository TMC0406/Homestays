import app from "antd/es/app";
import authRouter from "./auth"

const initRouters = () => {
    return (
        app.use('/', ( req, res => {
            console.log('server on....');
            
        }))
    )
}

export default initRouters