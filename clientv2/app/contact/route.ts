import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import { contactSchema } from "schemas/contactSchema";
import type { IContactForm } from "../../schemas/contactSchema";

export interface IMailOptions {
  to: string;
  from: string;
  subject: string;
  message: string;
  html: string;
  mail_settings: {
    sandboxMode: {
      enable: boolean;
    };
  };
}

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      //Set body constant
      const contactEmail: IContactForm = req.body.contact;
      const sandboxMode = true;
      await contactSchema
        .validate(contactEmail)
        .then(() => {
          //Mail options to be passed through inside sendEmail()
          const fromCustomerMsg: IMailOptions = {
            to: process.env.EMAIL!,
            from: process.env.EMAIL!,
            subject: `${contactEmail.subject}, from ${contactEmail.email}`,
            message: `From ${contactEmail.name}. 
            Email: ${contactEmail.email}. 
            Type of Enquiry: ${contactEmail.typeForm}. 
            ${contactEmail.message}.`,
            html: `<div>From ${contactEmail.name}</div>
            <div>Email: ${contactEmail.email}</div>
            <div>Type of Enquiry: ${contactEmail.typeForm}</div>
            <p>${contactEmail.message}</p>`,
            mail_settings: {
              sandboxMode: {
                enable: sandboxMode,
              },
            },
          };
          const confirmationMsg: IMailOptions = {
            to: contactEmail.email,
            from: process.env.EMAIL!,
            subject: `Confirmation email`,
            message: `Hi ${contactEmail.name}, 
            This is a confirmation email and thanks for the ${contactEmail.typeForm}. 
            I will be in contact within 2 business days. 
            Cheers, Adrian Cristallo. 
            
            Mesage sent: ${contactEmail.message}`,
            html: `
            <p>Hi ${contactEmail.name},</p>
            <p>
              This is a confirmation email and 
              thanks for the ${contactEmail.typeForm}.
            </p>
            <p>I will be in contact within 2 business days.</p>
            <p>Cheers,<br>Adrian Cristallo.</p>
            <br><br><br>
            <p>Message sent:<br>${contactEmail.message}<p>`,
            mail_settings: {
              sandboxMode: {
                enable: sandboxMode,
              },
            },
          };
          sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
          sgMail.send(confirmationMsg).catch((error) => error);
          sgMail.send(fromCustomerMsg).catch((error) => error);
        })
        .catch((error) => error);
      return res.status(200).json({
        success: true,
        message:
          "Your email has been sent and you will receive a confirmation email within 2 business days. Thank you.",
      });
    } catch (error) {
      return res.status(400).json({ success: false, error: error });
    }
  } else {
    return res
      .status(405)
      .json({ error: `Cannot ${req.method}`, success: false });
  }
};

export default contact;
