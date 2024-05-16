import authRouter from './auth'

const initRouter = (app) => {
    app.use('/api/v1/auth')
    return(
        app.use('/', (req, res) => {
            console.log('Hihihhihi');
        })
    )
}

export default initRouter