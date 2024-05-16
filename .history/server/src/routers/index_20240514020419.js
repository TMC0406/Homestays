import authRouter from './auth'

const initRouter = () => {
    return(
        app.use('/', (req, res) => {
            console.log('Hihihhihi');
        })
    )
}

export default initRouter