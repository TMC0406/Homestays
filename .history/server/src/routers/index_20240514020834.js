import authRouter from './auth'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    return(
        app.use('/', (req, res) => {
            console.log('Hihihhihi code chạy rồi -)))');
        })
    )
}

export default initRouter