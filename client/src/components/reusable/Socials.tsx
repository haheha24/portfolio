import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

interface ISocials {
  classContainer?: string;
  classIcon?: string;
  vertAlign?: string;
  github?: boolean;
  linkedin?: boolean;
  gmail?: boolean;
}

const Socials = ({
  classContainer,
  classIcon,
  vertAlign,
  github,
  linkedin,
  gmail,
  ...props
}: ISocials) => {
  return (
    <div className={classContainer}>
      {github && (
        <a
          href="https://github.com/haheha24"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <AiFillGithub style={{ verticalAlign: vertAlign }} />
        </a>
      )}
      {linkedin && (
        <a
          href="htthttps://www.linkedin.com/in/adrian-cristallo-784455203/ps://github.com/haheha24"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <AiFillLinkedin style={{ verticalAlign: vertAlign }} />
        </a>
      )}
      {gmail && (
        <a
          href="htthttps://www.linkedin.com/in/adrian-cristallo-784455203/ps://github.com/haheha24"
          className={classIcon}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <SiGmail style={{ verticalAlign: vertAlign }} />
        </a>
      )}
    </div>
  );
};

export default Socials;
