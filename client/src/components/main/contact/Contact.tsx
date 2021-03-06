import "./contact.css";
import { useReducer, useState, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import Socials from "../../reusable/Socials";
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
    {
      name: "",
      company: "",
      typeForm: "General Enquiry",
      email: "",
      subject: "",
      message: "",
    }
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

  const contactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //set sent state as false
    setSent(false);

    // Send post request to server, if reponse.status is 200, the form has been redirected to my email
    // Confirmation email has been sent on server. Activate thankyou component.
    const postRequest = axios
      .post(`${process.env.REACT_APP_SERVER_URL}/router/contactEmail`, contactInput)
      .then((response: AxiosResponse) => {
        //reset input fields and state
        setContactInput({
          name: "",
          company: "",
          typeForm: "General Enquiry",
          email: "",
          subject: "",
          message: "",
        });
        return response.status;
      })
      .catch((err) => {
        console.log(err);
      });
    if ((await postRequest) === 200) {
      setSent(true);
      document.getElementById("thankyou")?.focus();
    }
  };

  return (
    <>
      <div className="contact-flex-container">
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
                <span style={{ color: "hsl(0, 0%, 65%)" }}>
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
                required
              />
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="company">
                Company{" "}
                <span style={{ color: "hsl(0, 0%, 65%)" }}>
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
                <span style={{ color: "hsl(0, 0%, 65%)" }}>
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
                <option value="General enquiry">General Enquiry</option>
                <option value="Business enquiry">Business Enquiry</option>
                <option value="Employment enquiry">Employment Enquiry</option>
              </select>
            </div>
            <div className="contact-input-container contact-flex-dirCol">
              <label className="contact-label" htmlFor="email">
                Email{" "}
                <span style={{ color: "hsl(0, 0%, 65%)" }}>
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
                <span style={{ color: "hsl(0, 0%, 65%)" }}>
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
              <span style={{ color: "hsl(0, 0%, 65%)" }}>
                <i>(required)</i>
              </span>
            </label>
            <div className="contact-flex-dirCol">
              <textarea
                name="message"
                id="contact-form"
                className="contact-textarea"
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
        <section className="connect-section">
          <ul className="connect-ul">
            <li className="connect-li">
              <Socials github={true} classIcon="social-icon" vertAlign="top" />
            </li>
            <li className="connect-li">
              <Socials
                linkedin={true}
                classIcon="social-icon"
                vertAlign="top"
              />
            </li>
            <li className="connect-li">
              <Socials gmail={true} classIcon="social-icon" vertAlign="top" />
            </li>
          </ul>
        </section>
      </div>
      {sent && <Thankyou />}
    </>
  );
};

export default Contact;
