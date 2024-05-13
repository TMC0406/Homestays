import authRouter from "./auth"

const initRouters = (app) => {
    app.use('/api/v1/auth', authRouter)
    return (
        app.use('/', ( req, res) => {
            console.log('server on....');
            
        }))
}

export default initRouters