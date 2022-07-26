import { StyledAnchor } from "../styledComponents";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

interface ISocials {
  vertAlign?: string;
  github?: boolean;
  linkedin?: boolean;
  gmail?: boolean;
}

const StyledDiv = styled.div`
  display: flex;
`;

const SocialAnchor = styled(motion(StyledAnchor))`
  padding: 10px;
  margin: 0 10px;
  border-radius: 50px;
  border: 2.5px solid ${(props) => props.theme.color.purpleMain};
`;

const Socials = ({
  vertAlign,
  github,
  linkedin,
  gmail,
  ...props
}: ISocials) => {
  const theme = useTheme();

  return (
    <StyledDiv>
      {github && (
        <SocialAnchor
          href="https://github.com/haheha24"
          target="_blank"
          rel="noreferrer"
          {...props}
          whileHover={{ backgroundColor: theme.anchor.backgroundColorHover }}
          data-testid="socials-github"
        >
          <AiFillGithub
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-github-icon"
          />
        </SocialAnchor>
      )}
      {linkedin && (
        <SocialAnchor
          href="https://www.linkedin.com/in/adrian-cristallo-784455203"
          target="_blank"
          rel="noreferrer"
          {...props}
          whileHover={{ backgroundColor: theme.anchor.backgroundColorHover }}
          data-testid="socials-linkedin"
        >
          <AiFillLinkedin
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-linkedin-icon"
          />
        </SocialAnchor>
      )}
      {gmail && (
        <SocialAnchor
          href="mailto:adriancristallo1@gmail.com"
          rel="noreferrer"
          {...props}
          whileHover={{ backgroundColor: theme.anchor.backgroundColorHover }}
          data-testid="socials-gmail"
        >
          <SiGmail
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-gmail-icon"
          />
        </SocialAnchor>
      )}
    </StyledDiv>
  );
};

export default Socials;
