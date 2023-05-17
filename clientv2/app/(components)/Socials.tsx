import { StyledAnchor } from "../(styles)/globalStyledComponents";
import styled, { useTheme } from "styled-components";
import { HTMLMotionProps, motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { device } from "../(styles)/globalStyledComponents";

interface ISocials {
  direction?: "row" | "column";
  containerFixed?: boolean;
  vertAlign?: string;
  github?: boolean;
  linkedin?: boolean;
  gmail?: boolean;
  props?: HTMLMotionProps<"a">;
}

const StyledSocialContainer = styled.div.attrs(
  ({
    direction = "row",
    containerFixed,
  }: {
    direction: "row" | "column";
    containerFixed: boolean;
  }) => ({
    direction: direction,
    containerFixed: containerFixed,
  })
)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  padding: 0;
  position: ${({ containerFixed }) => (containerFixed ? "fixed" : "static")};
  right: ${({ containerFixed }) => (containerFixed ? "5%" : 0)};
  @media only screen and (${device.md}) {
    padding-bottom: 10px;
    justify-content: center;
    width: 100%;
  }
`;

const SocialAnchor = motion(styled(StyledAnchor).attrs(
  ({ $fixed }: { $fixed: boolean }) => ({
    $fixed: $fixed,
  })
)`
  font-size: ${({ theme, $fixed }) =>
    $fixed ? theme.font.font16 : theme.font.font18};
  padding: 10px;
  margin: 10px;
  color: ${(props) => props.theme.socials.anchor.color};
  background-color: ${(props) => props.theme.socials.anchor.backgroundColor};
  border-radius: 50px;
  border: 2.5px solid ${(props) => props.theme.color.purpleMain};
  @media only screen and (${device.md}) {
    margin: 0 10px;
  }
`);

const Socials = ({
  direction = "row",
  containerFixed,
  vertAlign = "text-top",
  github,
  linkedin,
  gmail,
  ...props
}: ISocials) => {
  const theme = useTheme();
  return (
    <StyledSocialContainer
      direction={direction}
      containerFixed={containerFixed}
    >
      {github && (
        <SocialAnchor
          href="https://github.com/haheha24"
          target="_blank"
          rel="noreferrer"
          {...props}
          data-testid="socials-github"
          whileHover={{
            backgroundColor: theme.anchor.backgroundColorHover,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          $fixed={containerFixed}
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
          data-testid="socials-linkedin"
          whileHover={{
            backgroundColor: theme.anchor.backgroundColorHover,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          $fixed={containerFixed}
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
          data-testid="socials-gmail"
          whileHover={{
            backgroundColor: theme.anchor.backgroundColorHover,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          $fixed={containerFixed}
        >
          <SiGmail
            style={{ verticalAlign: vertAlign }}
            data-testid="socials-gmail-icon"
          />
        </SocialAnchor>
      )}
    </StyledSocialContainer>
  );
};

export default Socials;
