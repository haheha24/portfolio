import styled from "styled-components";

//Media Queries
const size = {
  sm: 500,
  md: 860,
  lg: 1210,
};
const device = {
  sm: `max-width: ${size.sm}px`,
  md: `max-width: ${size.md}px`,
  lg: `max-width: ${size.lg}px`,
};

//Main
const StyledMain = styled.main`
  @media only screen and (${device.md}) {
    padding-top: 50px;
  }
`;

//Anchor
const StyledAnchor = styled.a`
  font-size: ${(props) => props.theme.font.font24};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.anchor.backgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.anchor.backgroundColorHover};
  }
`;

//Button
const StyledButton = styled.button`
  font-size: ${(props) => props.theme.font.font18};
  color: ${(props) => props.theme.fontColor};
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.button.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.button.backgroundColorHover};
  }
`;

//Headings
const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.body};
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.body};
`;

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.body};
`;

//Section
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

//Article
const StyledArticle = styled.article`
  scroll-margin-top: 75px;
`;

//Image
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  StyledMain,
  StyledAnchor,
  StyledButton,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledSection,
  StyledArticle,
  StyledImage,
  size,
  device,
};
