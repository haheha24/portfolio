import express from 'express'

const contactEmailRouter = express.Router()
contactEmailRouter.use(express.json())
contactEmailRouter.use(express.urlencoded({ extended: true }));

contactEmailRouter.post("/", (req, res) => {
    const contactEmail = req.body
    res.send(`received ${contactEmail}`)
})

contactEmailRouter.get("/", (req, res) => {
    res.send('contact email route')
})

export default contactEmailRouter