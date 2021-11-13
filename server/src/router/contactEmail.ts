require('dotenv').config()
import express from 'express'
import nodemailer from 'nodemailer'
import SMTPTransport from "nodemailer";
import { google } from 'googleapis'

//initialise Oauth2 through googleapi
const OAuth2 = google.auth.OAuth2;

//create the transporter that will create the nodemailer transport object
const createTransporter = async () => {
    //create a new oauth2 client using our client id and client secret from the api
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    )

    //grabs the refresh token
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    })

    //create a new promise that will get the accesstoken. can't use async await sugar
    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject("Failed to create access token");
            }
            resolve(token);
        });
    });

    //create the actual transporter object 
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        },
    } as SMTPTransport.TransportOptions);

    return transporter
}


const sendEmail = async (emailOptions: {}) => {
    let emailTransporter = await createTransporter()
    try {
        await emailTransporter.sendMail(emailOptions)
    } catch (error) {
        console.log(error)
    }

}

const contactEmailRouter = express.Router()
contactEmailRouter.use(express.json())
contactEmailRouter.use(express.urlencoded({ extended: true }));

contactEmailRouter.post("/", (req, res) => {
    const contactEmail = req.body
    sendEmail(contactEmail)
    res.json(contactEmail)
})

contactEmailRouter.get("/", (req, res) => {
    res.send('contact email route')
})

export default contactEmailRouter