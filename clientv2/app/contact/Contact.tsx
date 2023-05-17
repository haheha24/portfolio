"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { Formik, ErrorMessage } from "formik";
import { contactSchema } from "schemas/contactSchema";
import type { IContactForm } from "schemas/contactSchema";
import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactSelect,
  ContactPrivacyStatement,
  ContactSendBtn,
  ContactTextArea,
} from "./styles";
import { PrivacyLink } from "../privacypolicy/styles";
import Socials from "../(components)/Socials";
import Thankyou from "./Thankyou";

const Contact = () => {
  const initialValues: IContactForm = {
    name: "",
    typeForm: "General Enquiry",
    email: "",
    subject: "",
    message: "",
  };
  const [sent, setSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined | null>(null);
  const theme = useTheme();

  return (
    <>
      {error}
      {sent && <Thankyou {...{ modal: sent, showModal: setSent }} />}
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={async (values: IContactForm) => {
          setIsLoading(true);
          setSent(false);

          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ contact: values }),
          });
          const data: { success: boolean; error?: string; message?: string } =
            await res.json();

          if (!data.success) {
            setError(
              `Something went wrong while sending the email. 
              Please try again or try the alternative social 
              links to contact me.`
            );
            setSent(false);
          } else {
            /* resetForm();*/
            setError(null);
            setSent(true);
          }
          setIsLoading(false);
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => {
          return (
            <ContactContainer>
              <ContactForm
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <ContactLabel htmlFor="name">
                  Name
                  <ErrorMessage name="name">
                    {(msg) => (
                      <motion.span
                        style={{ color: "red" }}
                        animate={{ x: [-100, 100, 0], rotate: [40, -40, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {" " + msg}
                      </motion.span>
                    )}
                  </ErrorMessage>
                </ContactLabel>
                <ContactInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  $error={errors.name && touched.name ? true : false}
                />
                <ContactLabel htmlFor="typeForm">
                  Type of enquiry
                  <ErrorMessage name="typeForm">
                    {(msg) => (
                      <motion.span
                        style={{ color: "red" }}
                        animate={{ x: [-100, 100, 0], rotate: [40, -40, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {" " + msg}
                      </motion.span>
                    )}
                  </ErrorMessage>
                </ContactLabel>
                <ContactSelect
                  name="typeForm"
                  id="typeForm"
                  value={values.typeForm}
                  onChange={handleChange}
                  $error={errors.typeForm && touched.typeForm ? true : false}
                >
                  <option value="General enquiry">General Enquiry</option>
                  <option value="Business enquiry">Business Enquiry</option>
                  <option value="Employment enquiry">Employment Enquiry</option>
                </ContactSelect>
                <ContactLabel htmlFor="email">
                  Email
                  <ErrorMessage name="email">
                    {(msg) => (
                      <motion.span
                        style={{ color: "red" }}
                        animate={{ x: [-100, 100, 0], rotate: [40, -40, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {" " + msg}
                      </motion.span>
                    )}
                  </ErrorMessage>
                </ContactLabel>
                <ContactInput
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  $error={errors.email && touched.email ? true : false}
                />
                <ContactLabel htmlFor="subject">
                  Subject
                  <ErrorMessage name="subject">
                    {(msg) => (
                      <motion.span
                        style={{ color: "red" }}
                        animate={{ x: [-100, 100, 0], rotate: [40, -40, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {" " + msg}
                      </motion.span>
                    )}
                  </ErrorMessage>
                </ContactLabel>
                <ContactInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  $error={errors.subject && touched.subject ? true : false}
                />
                <ContactLabel htmlFor="contact-form">
                  Enter message here
                  <ErrorMessage name="message">
                    {(msg) => (
                      <motion.span
                        style={{ color: "red" }}
                        animate={{ x: [-100, 100, 0], rotate: [40, -40, 0] }}
                        transition={{ duration: 0.8 }}
                      >
                        {" " + msg}
                      </motion.span>
                    )}
                  </ErrorMessage>
                </ContactLabel>
                <ContactTextArea
                  name="message"
                  id="contact-form"
                  maxLength={250}
                  onChange={handleChange}
                  value={values.message}
                  $error={errors.message && touched.message ? true : false}
                  spellCheck={true}
                  placeholder="Hello ..."
                />
                <ContactSendBtn
                  type="submit"
                  initial={{ backgroundColor: theme.anchor.backgroundColor }}
                  whileHover={{
                    backgroundColor: theme.anchor.backgroundColorHover,
                    scale: 1.15,
                  }}
                  whileTap={{ scale: 1 }}
                >
                  {isLoading ? "Sending.." : "Send"}
                </ContactSendBtn>
                <ContactPrivacyStatement>
                  By submitting this form, I confirm that I have read and
                  understood <u>The Creative Age</u>{" "}
                  <Link
                    href="/privacypolicy"
                    passHref
                    legacyBehavior
                    scroll={false}
                  >
                    <PrivacyLink>Privacy Policy</PrivacyLink>
                  </Link>
                  {"."}
                </ContactPrivacyStatement>
              </ContactForm>
              <Socials github linkedin gmail vertAlign="text-top" />
            </ContactContainer>
          );
        }}
      </Formik>
    </>
  );
};

export default Contact;
