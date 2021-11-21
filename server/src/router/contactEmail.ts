require('dotenv').config()
import express from 'express'
const cors = require('cors')
import nodemailer from 'nodemailer'
import SMTPTransport from "nodemailer";
import { google } from 'googleapis'
import { body, validationResult } from "express-validator";

interface IcontactEmail {
  name: string
  company: string
  typeForm: string
  email: string
  subject: string
  message: string
}
interface ImailOptions {
  to: string | undefined
  from: string | undefined
  subject: string
  html: string
}

//initialise Oauth2 through googleapi
const OAuth2 = google.auth.OAuth2;

const sendEmail = async (emailOptions: SMTPTransport.SendMailOptions) => {
  //create the transporter that will create the nodemailer transport object

  //create a new oauth2 client using our client id and client secret from the api
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  //sets the refresh token
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  })

  //create a new promise that will get the accesstoken. can't use async await sugar
  /* const accessToken = await oauth2Client.getAccessToken(); <---- does 'work' but
  seems to require the message to be sent twice as the token is not ready on the first try. */
  const accessToken = await new Promise((resolve, reject): void => {
    oauth2Client.getAccessToken((err, token: string | undefined | null) => {
      if (err) {
        reject("Failed to create access token");
      }
      resolve(token);
    });
  });

  //create the actual transporter object 
  const transporter = nodemailer.createTransport<{ transportOption: string }>({
    service: 'Gmail',
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken: accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  } as SMTPTransport.TransportOptions);

  //Awaits the transporter to access my Gmail, then sends through the email with emailOptions
  //emailOptions variable is passed through by the contactEmailRouter.post
  try {
    const result = await transporter.sendMail(emailOptions)
    return result
  } catch (error) {
    console.log(error)
  }
}

//sets the html of the messages
const mailHtml = (email: IcontactEmail) => {
  const html =
    `<div>From ${email.name}</div>
        <div>Email: ${email.email}</div>
        <div>${email.company}</div>
        <div>Type of Enquiry: ${email.typeForm}</div>
        <p>${email.message}</p>`
  return html
}
const confirmationMailHtml = (confEmail: IcontactEmail) => {
  const html =
    `<p>Hi ${confEmail.name},</p><p>This is a confirmation email and 
        thanks for the ${confEmail.typeForm.toLowerCase()}.</p>
        <p>I will be in contact within 48 hours.</p><p>Cheers,<br>Adrian Cristallo.</p>
        <br><br><br>
        <p>Message sent:<br>${confEmail.message}<p>`;
  return html
}

const contactEmailRouter = express.Router()
contactEmailRouter.use(express.json())
contactEmailRouter.use(express.urlencoded({ extended: true }));
contactEmailRouter.use(cors())

//post end point
contactEmailRouter.post("/",
  body('name').not().isEmpty().trim().escape().withMessage("Name required"),
  body('company').not().trim().escape(),
  body('typeForm').not().isEmpty().withMessage("Type of enquiry required"),
  body('subject').not().isEmpty().trim().escape().withMessage("Subject required"),
  body('email').not().isEmpty().isEmail().normalizeEmail().trim().escape().withMessage("Email required"),
  (req: express.Request, res: express.Response) => {
    const contactEmail: IcontactEmail = req.body
    //check validation errors and create object
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    //Mail options to be passed through inside sendEmail()
    const mailOptions: ImailOptions = {
      to: process.env.EMAIL,
      from: contactEmail.email,
      subject: `${contactEmail.subject}, from ${contactEmail.email}`,
      html: mailHtml(contactEmail)
    }
    const confirmationMailOptions: ImailOptions = {
      to: contactEmail.email,
      from: process.env.EMAIL,
      subject: `Confirmation email`,
      html: confirmationMailHtml(contactEmail)
    }
    //forward to personal
    sendEmail(mailOptions)
      .then(result => console.log('Email sent: ,', JSON.stringify(result)))
      .catch(err => console.log(err.message))
    //confirmation Email
    sendEmail(confirmationMailOptions)
      .then(result => console.log('Email sent: ,', JSON.stringify(result)))
      .catch(err => console.log(err.message))

    //send back reponse to log status text on client side
    return res.status(200).json(contactEmail)
  })

export default contactEmailRouter