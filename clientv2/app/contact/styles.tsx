"use client"

import { motion } from "framer-motion";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { Field } from "formik";
import { StyledButton, device } from "../(styles)/globalStyledComponents";

//Contact Styles
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (${device.sm}) {
    width: 85%;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  margin: 10px 20px;

  @media only screen and (${device.md}) {
    text-align: center;
    align-items: center;
  }
`;

const ContactLabel = styled.label`
  color: ${(props) => props.theme.contact.label.color};
  padding: 5px;
`;

const ContactInput = styled(Field)`
  font-size: ${(props) => props.theme.font.font16};
  padding: 2.5px 10px;
  width: 100%;
  border: 2.5px solid
    ${({ theme, $error }) =>
      $error ? theme.contact.input.error.borderColor : "black"};
`;

const ContactSelect = styled.select.attrs(
  ({ $error }: { $error: boolean }) => ({ $error: $error })
)`
  font-size: ${(props) => props.theme.font.font16};
  padding: 2.5px 10px;
  width: 100%;
  border: 2.5px solid
    ${({ theme, $error }) =>
      $error ? theme.contact.input.error.borderColor : "black"};
`;

const ContactTextArea = styled.textarea.attrs(
  ({ $error }: { $error: boolean }) => ({ $error: $error })
)`
  font-size: ${(props) => props.theme.font.font18};
  line-height: 1.25em;
  padding: 5px 10px;
  width: 100%;
  height: 5em;
  border: 2.5px solid
    ${({ theme, $error }) =>
      $error ? theme.contact.input.error.borderColor : "black"};
`;

const ContactPrivacyStatement = styled.p`
  font-size: ${(props) => props.theme.font.font14};
  color: ${(props) => props.theme.color.lightGrey};
`;

const ContactSendBtn = motion(styled(StyledButton)`
  padding: 5px 25px;
  margin: 20px 0;
  align-self: center;
  border-radius: 10px;
  border: 2.5px solid ${(props) => props.theme.contact.button.border};
`);

//HandleEmail Styles
const ContactPrivacyContainer = styled.div`
  //REVIEW
  display: flex;
  justify-content: center;
`;
const HandleContactContainer = motion(styled.div`
  display: flex;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.font.font18};
  border-radius: 10px;
  box-shadow: 10px 10px
    ${({ theme }) => theme.contact.handleContact.thankyou.container.boxShadow};
  background-color: ${({ theme }) =>
    theme.contact.handleContact.thankyou.container.backgroundColor};
`);
const HandleContactParagraph = styled.p`
  padding: 20px 10px;
`;

const CloseModal = motion(styled(StyledButton)`
  position: relative;
  margin: 10px;
  background-color: transparent;
  border-radius: 50px;
  border: none;
  cursor: auto;
`);

const CloseIcon = styled(AiFillCloseCircle)`
  font-size: ${({ theme }) => theme.font.font20};
  border-radius: 50px;
  background-color: ${({ theme }) =>
    theme.contact.handleContact.closeModal.backgroundColor};
  fill: ${({ theme }) => theme.contact.handleContact.closeModal.fill};
  cursor: pointer;
`;

export {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactSelect,
  ContactLabel,
  ContactSendBtn,
  ContactTextArea,
  ContactPrivacyStatement,
  ContactPrivacyContainer,
  HandleContactContainer,
  HandleContactParagraph,
  CloseModal,
  CloseIcon,
};
