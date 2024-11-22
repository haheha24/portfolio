import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { ContactForm, contactSchema } from "schemas/contactSchema";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message }: ContactForm = req.body.contact;
      const clientMsgToMe = {
        to: "adriancristallo1@gmail.com",
        from: "adriancristallo1@gmail.com",
        subject: `${subject} via ${email}`,
        text: `From:\n ${name}\n ${email}\n Subject: ${subject}\n Message: ${message}\n Received at ${
          new Date().toLocaleTimeString() +
          " on " +
          new Date().toLocaleDateString()
        }`,
        html: `From:\n ${name}\n ${email}\n Subject: ${subject}\n Message: ${message}\n Received at ${
          new Date().toLocaleTimeString() +
          " on " +
          new Date().toLocaleDateString()
        }`,
        mail_settings: {
          sandbox_mode: {
            enable: false,
          },
        },
      };
      const confirmationMsg = {
        to: email,
        from: "adriancristallo1@gmail.com",
        subject: `Confirmation Email RE: ${subject}`,
        text: `Hi ${name}.\n Thank you for reaching out. I have received your email and will respond back to you within 48 hours.\n Thank you.`,
        html: `Hi ${name}.\n Thank you for reaching out. I have received your email and will respond back to you within 48 hours.\n Thank you.`,
        mail_settings: {
          sandbox_mode: {
            enable: true,
          },
        },
      };
      /**
       * error - unhandledRejection: Error [ERR_SOCKET_CONNECTION_TIMEOUT]: Socket connection timeout
       * Occurs when attempting to make fetch calls to certain end points.
       * Issue with latest stable node version 20.2.
       * AutoSelectFamily seems to be the issue
       * https://github.com/trufflesuite/ganache/pull/4427
       * https://github.com/trufflesuite/ganache/pull/4426
       * Downgraded node to 18.6 currently working.
       * Disabling AutoSelectFamily apparently works but have no tested.
       */
      sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
      return await contactSchema.validate(req.body.contact).then(() => {
        sgMail.send(clientMsgToMe).catch((error) => {
          throw error;
        });
        sgMail.send(confirmationMsg).catch((error) => {
          throw error;
        });
        return res.status(200).json({ success: true, error: undefined });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: error });
    }
  } else {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ success: false, error: "Method Not Allowed." });
  }
};

export default contact;
