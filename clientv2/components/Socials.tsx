import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Button from "./Button";

interface SocialsProps {
  row?: boolean;
  className?: string;
  vertAlign?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
  github?: boolean;
  linkedin?: boolean;
  gmail?: boolean;
}

const Socials = ({
  row = true,
  className = "",
  vertAlign,
  width,
  height,
  color = "white",
  github,
  linkedin,
  gmail,
}: SocialsProps) => {
  return (
    <div
      className={`flex ${row ? "flex-row" : "flex-col"} gap-5 justify-center`}
      data-testid="socials-container"
    >
      {github && (
        <Button
          as="a"
          href="https://github.com/haheha24"
          className={className}
          data-testid="socials-github"
        >
          <AiFillGithub
            style={{ verticalAlign: vertAlign, width: width, height: height }}
            color={color}
            data-testid="socials-github-icon"
          />
        </Button>
      )}
      {linkedin && (
        <Button
          as="a"
          href="https://www.linkedin.com/in/adrian-cristallo-784455203"
          className={className}
          data-testid="socials-linkedin"
        >
          <AiFillLinkedin
            style={{ verticalAlign: vertAlign, width: width, height: height }}
            color={color}
            data-testid="socials-linkedin-icon"
          />
        </Button>
      )}
      {gmail && (
        <Button
          as="a"
          href="mailto:adriancristallo1@gmail.com"
          className={className}
          data-testid="socials-gmail"
        >
          <SiGmail
            style={{ verticalAlign: vertAlign, width: width, height: height }}
            color={color}
            data-testid="socials-gmail-icon"
          />
        </Button>
      )}
    </div>
  );
};

export default Socials;
