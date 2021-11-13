import Express from 'express'
import router from './router/index'

const app = Express();

app.use('/router', router)

//Port
const port = 5000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})