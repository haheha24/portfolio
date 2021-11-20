import React, { useReducer, useState } from "react";
import "./contact.css";
import { SiGithub, SiGmail } from "react-icons/si";
import axios from "axios";
import Thankyou from "./Thankyou";

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
  typeForm: string;
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
    { name: "", company: "", typeForm: "", email: "", subject: "", message: "",  }
  );
  const [sent, setSent] = useState<boolean>(false);

  const contactHandle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.currentTarget;
    setContactInput({ [name]: value });
  };

  const contactSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Do stuff -  validate and fetch > send to server api end point > nodemailer
    const postRequest = axios
      .post("http://localhost:5000/router/contactEmail", contactInput)
      .then((response) => {
        console.log(response.statusText)
        return response.statusText;
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("name")?.focus();

    if (await postRequest) {
      return <Thankyou contactName={contactInput.name} />;
    }
  };

  return (
    <div className="contact-outer-container">
      <h1 className="contact-title">Contact Form</h1>
      <div className="contact-flex-container">
        <div className="contact-container contact-form-container">
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
                  value={contactInput.typeForm}
                  onChange={(e) => contactHandle(e)}
                >
                  <option
                    value="General Enquiry"
                    disabled
                    style={{ color: "hsl(0, 0%, 50%)" }}
                  >
                    Please select
                  </option>
                  <option value="General enquiry">General Enquiry</option>
                  <option value="Business enquiry">Business Enquiry</option>
                  <option value="Employment enquiry">Employment Enquiry</option>
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
                  /* cols={50}
                  rows={30} */
                  maxLength={250}
                  onChange={(e) => contactHandle(e)}
                  value={contactInput.message}
                  required
                  spellCheck={true}
                  placeholder="Hello ..."
                ></textarea>
                <button className="contact-btn">Send</button>
                {sent === true ? (
                  <Thankyou contactName={contactInput.name} />
                ) : (
                  ""
                )}
                {/* <Thankyou contactName={contactInput.name} /> */}
              </div>
            </div>
          </form>
        </div>
        <section className="connect-section">
          <h2 className="connect-title">Connect</h2>
          <ul className="connect-ul">
            <li className="connect-li">
              <span style={{ verticalAlign: "middle", fontSize: "2em" }}>
                <SiGithub />
                {"  "}
              </span>
              https://github.com/haheha24
            </li>
            <li className="connect-li">
              <span style={{ verticalAlign: "middle", fontSize: "2em" }}>
                <SiGmail
                  stroke="white"
                  strokeWidth="1px"
                  fill="hsl(0, 100%, 80%)"
                />
              </span>
              {"  "}
              adriancristallo1@gmail.com
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
