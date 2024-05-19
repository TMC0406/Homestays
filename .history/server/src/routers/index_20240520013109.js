import authRouter from './auth.js'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    return(
        app.use('/', (req, res) => {
            res.send('Ơn giời...code chạy đây rồi -)))')
        })
    )
}

export default initRouter