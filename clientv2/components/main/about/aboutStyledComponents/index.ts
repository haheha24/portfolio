import styled from "styled-components";
import {
  StyledArticle,
  StyledH3,
  StyledButton,
  device,
} from "../../../styledComponents";

//Styled Components
const TextContainer = styled(StyledArticle)`
  margin: 0 20%;

  @media only screen and (${device.sm}) {
    margin: 0;
  }
`;
const Paragraph = styled.p`
  list-style-position: inside;
  line-height: 2em;
  text-align: justify;

  @media only screen and (${device.sm}) {
    text-align: left;
    width: 75%;
    margin: 0 auto;
  }
`;
const Ul = styled.ul`
  list-style-position: inside;
  line-height: 2em;
  text-align: justify;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.25em;
  min-height: 380px;
`;
const SkillsBtnContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (${device.sm}) {
    flex-direction: column;
  }
`;
const SkillsBtn = styled(StyledButton).attrs(
  ({ active }: { active: boolean }) => ({
    active: active,
  })
)`
  font-size: ${(props) => props.theme.font.font18};
  background-color: ${(props) =>
    props.active === true
      ? props.theme.about.skills.skillsBtn.backgroundColorActive
      : props.theme.about.skills.skillsBtn.backgroundColor};
  padding: 6px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border: 2.5px solid ${(props) => props.theme.about.skills.skillsBtn.border};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.theme.about.skills.skillsBtn.backgroundColorHover};
  }

  @media only screen and (${device.sm}) {
    width: 100%;
    border-radius: 0;
  }
`;
const SkillsBubble = styled.div`
  padding: 20px;
  border-top-left-radius: 2.5px;
  border-top-right-radius: 2.5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 10px
    ${(props) => props.theme.about.skills.skillsContainer.boxShadow};
  background-color: ${(props) =>
    props.theme.about.skills.skillsContainer.backgroundColor};

  @media only screen and (${device.sm}) {
    border-radius: 0;
    box-shadow: 0 10px 10px
      ${(props) => props.theme.about.skills.skillsContainer.boxShadow};
  }
`;

const Subtitle = styled(StyledH3)`
  padding: 10px 0;
  background-color: initial;

  @media only screen and (${device.sm}) {
    text-align: left;
    width: 75%;
    margin: 0 auto;
  }
`;

export {
  TextContainer,
  Paragraph,
  Ul,
  SkillsContainer,
  SkillsBtnContainer,
  SkillsBtn,
  SkillsBubble,
  Subtitle,
};
