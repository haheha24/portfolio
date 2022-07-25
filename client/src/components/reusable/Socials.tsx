import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

interface ISocials {
  classIconContainer?: string;
  classIcon?: string;
  vertAlign?: string;
  github?: boolean;
  linkedin?: boolean;
  gmail?: boolean;
}

const Socials = ({
  classIconContainer,
  classIcon,
  vertAlign,
  github,
  linkedin,
  gmail,
  ...props
}: ISocials) => {
  return (
    <div className={classIconContainer} data-testid="socials-container">
      {github && (
        <a
          href="https://github.com/haheha24"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          data-testid="socials-github"
          {...props}
        >
          <AiFillGithub
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-github-icon"
          />
        </a>
      )}
      {linkedin && (
        <a
          href="https://www.linkedin.com/in/adrian-cristallo-784455203"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          data-testid="socials-linkedin"
          {...props}
        >
          <AiFillLinkedin
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-linkedin-icon"
          />
        </a>
      )}
      {gmail && (
        <a
          href="mailto:adriancristallo1@gmail.com"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          {...props}
          data-testid="socials-gmail"
        >
          <SiGmail
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-gmail-icon"
          />
        </a>
      )}
    </div>
  );
};

export default Socials;
