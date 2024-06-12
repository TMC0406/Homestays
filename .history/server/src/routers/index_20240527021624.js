import authRouter from './auth'
import insertRouter from './insert'

const initRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/insert', insertRouter)

    return(
        app.use('/', (req, res) => {
            res.send('Ơn giời...code chạy đây rồi -)))')
        })
    )
}

export default initRouter