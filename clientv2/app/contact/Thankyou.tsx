"use client"

import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence } from "framer-motion";
import {
  HandleContactContainer,
  HandleContactParagraph,
  CloseModal,
  CloseIcon,
} from "./styles";

const Thankyou = ({
  modal = false,
  showModal,
}: {
  modal?: boolean;
  showModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {modal && (
        <HandleContactContainer
          key="modal"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
        >
          <HandleContactParagraph>
            Thank you for your enquiry. <br />A confirmation email will be sent
            and your email will be responded to within 2 business days.
          </HandleContactParagraph>
          <div>
            <CloseModal
              type="button"
              onClick={() => showModal(false)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <CloseIcon style={{ verticalAlign: "middle" }} />
            </CloseModal>
          </div>
        </HandleContactContainer>
      )}
    </AnimatePresence>
  );
};

export default Thankyou;
