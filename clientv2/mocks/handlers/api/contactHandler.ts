import { rest } from "msw";
import { contactSchema } from "../../../schemas/contactSchema";
import type { IContactForm } from "../../../schemas/contactSchema";

interface ContactReq {
  contact: IContactForm
}

interface ContactResponseBody {
  success: boolean;
  error?: unknown;
}

const contactHandler = rest.post<ContactReq, {}, ContactResponseBody>(
  "/api/contact",
  async (req, res, ctx) => {
    try {
      const contactEmail: IContactForm = await req.json<ContactReq>().then((data) => data.contact);
      console.log(contactEmail)
      if (await contactSchema.validate(contactEmail))
        return res(ctx.status(200), ctx.json({ success: true }));
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({ success: false, error: JSON.stringify(error) })
      );
    }
  }
);

export default contactHandler;
