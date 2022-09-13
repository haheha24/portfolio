import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { SendMailOptions, TransportOptions } from "nodemailer";
import { google } from "googleapis";
import { contactSchema } from "schemas/contactSchema";
import type { IContactForm } from "../../schemas/contactSchema";

export interface IMailOptions {
  to: string | undefined;
  from: string | undefined;
  subject: string;
  html: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const sendEmail = async (emailOptions: SendMailOptions) => {
    //create the transporter that will create the nodemailer transport object

    //initialise Oauth2 through googleapi
    const OAuth2 = google.auth.OAuth2;
    //create a new oauth2 client using our client id and client secret from the api
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    //sets the refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    //create a new promise that will get the accesstoken. can't use async await sugar
    /* const accessToken = await oauth2Client.getAccessToken(); <---- does 'work' but
    seems to require the message to be sent twice as the token is not ready on the first try. */
    const accessToken = await new Promise((resolve, reject): void => {
      oauth2Client.getAccessToken((err: any, token: string | undefined | null) => {
        if (err) {
          reject("Failed to create access token");
        }
        resolve(token);
      });
    });

    //create the actual transporter object
    const transporter = nodemailer.createTransport<{
      transportOption: string;
    }>({
      service: "Gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken: accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    } as TransportOptions);

    //Awaits the transporter to access my Gmail, then sends through the email with emailOptions
    //emailOptions variable is passed through by the contactEmailRouter.post
    try {
      const result = await transporter.sendMail(emailOptions);
      console.log(transporter);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  //sets the html of the messages
  const mailHtml = (email: IContactForm) => {
    const html = `<div>From ${email.name}</div>
        <div>Email: ${email.email}</div>
        <div>Type of Enquiry: ${email.typeForm}</div>
        <p>${email.message}</p>`;
    return html;
  };
  const confirmationMailHtml = (confEmail: IContactForm) => {
    const html = `
    <p>Hi ${confEmail.name},</p>
    <p>
      This is a confirmation email and 
      thanks for the ${confEmail.typeForm}.
    </p>
    <p>I will be in contact within 48 hours.</p>
    <p>Cheers,<br>Adrian Cristallo.</p>
    <br><br><br>
    <p>Message sent:<br>${confEmail.message}<p>`;
    return html;
  };

  //Set body constant
  const contactEmail: IContactForm = req.body.contact;
  //Mail options to be passed through inside sendEmail()
  const mailOptions: IMailOptions = {
    to: process.env.EMAIL,
    from: contactEmail.email,
    subject: `${contactEmail.subject}, from ${contactEmail.email}`,
    html: mailHtml(contactEmail),
  };
  const confirmationMailOptions: IMailOptions = {
    to: contactEmail.email,
    from: process.env.EMAIL,
    subject: `Confirmation email`,
    html: confirmationMailHtml(contactEmail),
  };
  if (req.method === "POST") {
    try {
      await contactSchema.validate(contactEmail).then(() => {
        sendEmail(mailOptions);
        sendEmail(confirmationMailOptions);
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  } else {
    return res.status(405).json(`Cannot ${req.method}`);
  }
};
