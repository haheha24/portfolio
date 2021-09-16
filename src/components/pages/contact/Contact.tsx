import React, { useReducer } from "react";
import "./contact.css";

//this interface is for setting state
interface IformInput {
  [name: string]: string;
}
//This interface is for resetting after submit
interface IcontactForm {
  name: string;
  company?: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [contactInput, setContactInput] = useReducer(
    (
      initialHandle: IformInput | IcontactForm,
      newHandle: IformInput | IcontactForm
    ) => ({
      ...initialHandle,
      ...newHandle,
    }),
    { name: "", email: "", subject: "", company: "", message: "" }
  );

  const contactHandle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.currentTarget;
    setContactInput({ [name]: value });
  };

  const contactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Do stuff -  validate and fetch > send to server api end point > nodemailer

    setContactInput({
      name: "",
      subject: "",
      email: "",
      company: "",
      message: "",
      typeForm: ""
    });
    document.getElementById("name")?.focus();
  };
  return (
    <>
      <h1 className="contact-title">Contact Form</h1>
      <div className="contact-form-container">
        <form
          action=""
          id="contact-form"
          className="contact-form-flex"
          onSubmit={contactSubmit}
        >
          <div className="contact-flex-dirCol">
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="name">
                Name{" "}
                <span style={{ color: "hsl(0, 0%, 50%)" }}>
                  <i>(required)</i>
                </span>
              </label>
              <input
                type="text"
                id="name"
                className="contact-input"
                name="name"
                placeholder="Name"
                value={contactInput.name}
                onChange={(e) => contactHandle(e)}
                autoFocus={true}
                required
              />
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="company">
                Company{" "}
                <span style={{ color: "hsl(0, 0%, 50%)" }}>
                  <i>(optional)</i>
                </span>
              </label>
              <input
                type="text"
                id="company"
                className="contact-input"
                name="company"
                placeholder="Company"
                value={contactInput.company}
                onChange={(e) => contactHandle(e)}
              />
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="typeForm">
                Type of enquiry{" "}
                <span style={{ color: "hsl(0, 0%, 50%)" }}>
                  <i>(required)</i>
                </span>
              </label>
              <select
                name="typeForm"
                className="contact-input"
                id="typeForm"
                onChange={(e) => contactHandle(e)}
              >
                <option value="" disabled selected style={{ color: "hsl(0, 0%, 50%)" }}>
                  Please select
                </option>
                <option value="Business">Business</option>
                <option value="Employment">Employment</option>
                <option value="Enquiry">General Enquiry</option>
              </select>
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="email">
                Email{" "}
                <span style={{ color: "hsl(0, 0%, 50%)" }}>
                  <i>(required)</i>
                </span>
              </label>
              <input
                type="email"
                id="email"
                className="contact-input"
                name="email"
                value={contactInput.email}
                onChange={(e) => contactHandle(e)}
                required
              />
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="subject">
                Subject{" "}
                <span style={{ color: "hsl(0, 0%, 50%)" }}>
                  <i>(required)</i>
                </span>
              </label>
              <input
                type="text"
                id="subject"
                className="contact-input"
                name="subject"
                value={contactInput.subject}
                onChange={(e) => contactHandle(e)}
                required
              />
            </div>
          </div>
          <div className="contact-input-container contact-flex-dirCol">
            <label className="contact-label" htmlFor="contact-form">
              Please enter your message here{" "}
              <span style={{ color: "hsl(0, 0%, 50%)" }}>
                <i>(required)</i>
              </span>
            </label>
            <div className="contact-flex-dirCol">
              <textarea
                name="message"
                id="contact-form"
                className="contact-textarea"
                cols={50}
                rows={30}
                maxLength={250}
                onChange={(e) => contactHandle(e)}
                value={contactInput.message}
                required
                spellCheck={true}
                placeholder="Hello ..."
              ></textarea>
              <button className="contact-btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
