import Express from 'express'
/* import nodemailer from 'nodemailer' */
import router from './router/index'

const app = Express();

//Nodemailer
/* let transporter = nodemailer.createTransport();

let message = {
    from: "sender",
    to: "adriancristallo1@gmail.com",
    subject: "subject",
    text: "enquiry",
    html: "<p>HTML version of the message</p>"
} */

//Temp get
app.get("/", (req, res) => {
    res.send("hello"),
    console.log("hello")
})

app.use('/router', router)

//Port
const port = 5000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})