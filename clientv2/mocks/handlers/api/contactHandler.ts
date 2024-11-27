import { http, HttpResponse } from "msw";
import { contactSchema } from "../../../schemas/contactSchema";
import type { IContactForm } from "../../../schemas/contactSchema";

// Mock `sgMail.send` to simulate the SendGrid behavior
const mockSendGrid = async (message: any) => {
  console.log("Mocking email send for:", message);
  return Promise.resolve({ status: "success" });
};

interface ContactResponseBody {
  success: boolean;
  error?: unknown | JSON;
}

const contactHandler = http.post<
  {},
  { contact: IContactForm },
  ContactResponseBody,
  "/api/contact"
>("/api/contact", async ({ request }) => {
  try {
    const data: { contact: IContactForm } = await request.json();
    const contact = data.contact;
    const validateContacts = await contactSchema.validate(contact);
    await Promise.all([
      mockSendGrid({ to: "me@test.com", ...validateContacts }),
      mockSendGrid({ to: validateContacts.email, ...validateContacts }),
    ]);
    return HttpResponse.json(
      { success: true, error: undefined },
      { status: 200 }
    );
  } catch (error) {
    return HttpResponse.json(
      { success: false, error: JSON.stringify(error) },
      { status: 500 }
    );
  }
});

export default contactHandler;
