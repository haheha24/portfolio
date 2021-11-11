import express from 'express'
import contactEmailRouter from './contactEmail'
//router index

const router = express.Router()

router.use("/contactEmail", contactEmailRouter)


export default router