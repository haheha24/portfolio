import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { IContactForm, contactSchema } from "schemas/contactSchema";
import { ValidationError } from "yup";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({ success: false, error: { message: "Method Not Allowed." } });
  }
  try {
    const contactData: IContactForm = await contactSchema.validate(
      req.body.contact
    );
    const { name, email, subject, message } = contactData;

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
          enable: process.env.SANDBOX === "true",
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
          enable: process.env.SANDBOX === "true",
        },
      },
    };
    await Promise.all([
      sgMail.send(clientMsgToMe),
      sgMail.send(confirmationMsg),
    ]);
    return res.status(200).json({ success: true, error: undefined });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Error processing contact form:", error);
      return res.status(400).json({ success: false, error: error });
    } else if (error instanceof Error) {
      console.log("An error occured while sending emails:", error);
      return res.status(400).json({ success: false, error: error });
    } else {
      console.error("Unknown error:", error);
      return res.status(400).json({ success: false, error: error });
    }
  }
};

export default contact;
