import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Socials from "../Socials";
import Button from "components/Button";
import { H2 } from "components/Heading";
import { contactSchema } from "schemas/contactSchema";
import Modal from "../Modal";

const Contact = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);
  const LabelClass = "p-1 self-start";
  const InputClass = "sm:w-full w-[95%] p-1 text-black-primary";

  return (
    <section id="contact" className="relative w-full space-y-5">
      <H2>Contact</H2>
      {!sent && (
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={async (values, { resetForm }) => {
            setSent(false);
            setSubmitError(undefined);
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ contact: values }),
              });
              const data = await res.json();

              if (data.error) setSubmitError(data.error);
              if (data.success) setSent(true);

              resetForm();
            } catch (error) {
              setSent(false);
              setSubmitError("Something went wrong, please try again.");
            }
          }}
        >
          {({ handleChange, handleSubmit, errors, values }) => (
            <Form
              id="contact-form"
              className="flex flex-col items-center 2xl:max-w-2xl lg:max-w-lg max-w-sm mx-auto"
              onSubmit={handleSubmit}
            >
              <label
                className={LabelClass}
                htmlFor="name"
                data-testid="contact-name"
              >
                Name{errors.name && <>{": " + errors.name}</>}
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                value={values.name}
                className={
                  InputClass +
                  " " +
                  (errors.name &&
                    "outline outline-[#dc2626] outline-2 outline-offset-2 animate-formError")
                }
                onChange={handleChange}
                required
              />
              <label
                className={LabelClass}
                htmlFor="email"
                data-testid="contact-email"
              >
                Email{errors.email && <>{": " + errors.email}</>}
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                value={values.email}
                className={
                  InputClass +
                  " " +
                  (errors.email &&
                    "outline outline-[#dc2626] outline-2 outline-offset-2 animate-formError")
                }
                onChange={handleChange}
                required
              />
              <label
                className={LabelClass}
                htmlFor="subject"
                data-testid="contact-subject"
              >
                Subject{errors.subject && <>{": " + errors.subject}</>}
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                className={
                  InputClass +
                  " " +
                  (errors.subject &&
                    "outline outline-[#dc2626] outline-2 outline-offset-2 animate-formError")
                }
                onChange={handleChange}
                required
              />
              <label
                className={LabelClass}
                htmlFor="message"
                data-testid="contact-message"
              >
                Message
                {errors.message && <>{": " + errors.message}</>}
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                value={values.message}
                maxLength={250}
                className={
                  "py-1 px-2.5 sm:w-full w-[95%] min-h-[200px] text-black-primary" +
                  " " +
                  (errors.message &&
                    "outline outline-[#dc2626] outline-2 outline-offset-2 animate-formError")
                }
                onChange={handleChange}
                required
                spellCheck={true}
              />
              <Button
                type="submit"
                form="contact-form"
                className="p-1 my-5 w-24 align-baseline self-center bg-purple-secondary hover:bg-purple-primary rounded-xl border-[2.5px] border-solid border-purple-primary"
              >
                Send
              </Button>
            </Form>
          )}
        </Formik>
      )}
      {sent && (
        <Modal
          useIcon={true}
          className="w-fit m-auto rounded-lg bg-black-primary animate-slideUp"
        >
          <p className="py-5 px-2.5">
            Thank you for your enquiry. <br />A confirmation email will be sent
            and you&amp;ll receive response within 48 hours.
          </p>
        </Modal>
      )}
      {submitError && (
        <Modal
          useIcon={true}
          className="w-fit m-auto rounded-lg bg-black-primary animate-slideUp"
        >
          <p className="py-5 px-2.5">{JSON.stringify(submitError)}</p>
        </Modal>
      )}
      <Socials
        github
        linkedin
        gmail
        className="mx-2.5 p-2.5 text-dynamic-2xl hover:bg-purple-primary bg-purple-secondary border-purple-primary border-[2.5px] rounded-full transition-colors duration-150 ease-out"
        width={"1em"}
        height={"1em"}
      />
    </section>
  );
};

export default Contact;
