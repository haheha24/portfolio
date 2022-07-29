import styled from "styled-components";
import {
  StyledAnchor,
  StyledH1,
  device,
  StyledArticle,
  StyledImage,
} from "components/styledComponents";

const ProjectContainer = styled(StyledArticle)`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 10px;
  justify-items: center;
  margin: 0 12.5%;

  @media only screen and ${device.md} {
    grid-template-columns: repeat(2, 50%);
    border-radius: 0;
    margin: 0 2.5%;
  }
  @media only screen and ${device.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0;
    margin: 0 5%;
    padding: 0;
  }
`;

const ProjectCardFigure = styled.figure`
  height: 250px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin: 2%;
  background-color: ${(props) =>
    props.theme.projects.projectCard.backgroundColor};

  @media only screen and ${device.md} {
    width: 100%;
  }
`;

const ProjectCardImage = styled(StyledImage)`
  transition: 0.45s ease-in-out;
`;

const ProjectCardCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.theme.projects.projectCard.projectCardCaption.backgroundColor};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: .45s ease-in-out;
  z-index: 1;
}
`;

const ProjectCardTitle = styled(StyledH1)`
  margin: 10px 0;
  padding 5px 0;
  background-color: inherit;
`;
const ProjectCardText = styled.p`
  margin: 10px 0;
`;

const ProjectCardLink = styled(StyledAnchor)`
  font-size: ${(props) => props.theme.font.font18};
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 2.5px solid
    ${(props) => props.theme.projects.projectCard.projectCardLink.border};
  z-index: 2;
`;

export {
  ProjectContainer,
  ProjectCardFigure,
  ProjectCardImage,
  ProjectCardCaption,
  ProjectCardTitle,
  ProjectCardText,
  ProjectCardLink,
};
