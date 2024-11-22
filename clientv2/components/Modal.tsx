import { useState } from "react";
import Button from "components/Button";
import { GiCancel } from "react-icons/gi";

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  useButton?: boolean;
  useIcon?: boolean;
}

const Modal = (props: ModalProps) => {
  const {
    children,
    useButton = true,
    useIcon = true,
    className,
    ...rest
  } = props;
  const [close, setClose] = useState<boolean>(false);
  const position = {
    icon: "mb-auto mt-2.5 mr-2.5",
    text: "self-center",
  };
  return (
    <>
      {!close && (
        <article
          className={`flex ${
            useIcon ? "flex-row" : "flex-col"
          } z-50 ${className}`}
          {...rest}
        >
          {children}
          {useButton && (
            <Button
              type="button"
              aria-label="Close modal"
              role="button"
              className={`${useIcon ? position.icon : position.text}`}
              onClick={(e) => {
                e.preventDefault();
                setClose(true);
              }}
            >
              {useIcon && (
                <GiCancel className="p-0 mb-5 text-dynamic-2xl text-white hover:text-purple-primary bg-purple-primary hover:bg-white rounded-full transition-colors duration-150 ease-out" />
              )}
              {!useIcon && (
                <div className="p-1 mb-5 w-24 align-baseline bg-purple-secondary hover:bg-purple-primary rounded-xl border-[2.5px] border-solid border-purple-primary">
                  Close
                </div>
              )}
            </Button>
          )}
        </article>
      )}
    </>
  );
};

export default Modal;
