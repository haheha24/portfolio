import styled from "styled-components";
import {
  StyledArticle,
  StyledAnchor,
  StyledParagraph,
  StyledUl,
  StyledH1,
  StyledH2,
  StyledH3,
} from "../(styles)/globalStyledComponents";

//Article - container
const TextContainer = styled(StyledArticle)`
  padding: 0 5%;
`;
//Section - Before each H1
const PrivacySection = styled.section`
  margin-top: 20px;
  width: 100%;
`;
//Ulist and List
const PrivacyUl = styled(StyledUl)``;
// H1
const PrivacyH1 = styled(StyledH1)`
  font-size: ${({ theme }) => theme.font.font30};
  background-color: transparent;
  margin: 10px 0;
`;
// H2
const PrivacyH2 = styled(StyledH2)`
  font-size: ${({ theme }) => theme.font.font24};
  background-color: transparent;
  margin: 10px 0;
`;
// H3
const PrivacyH3 = styled(StyledH3)`
  font-size: ${({ theme }) => theme.font.font20};
  background-color: transparent;
  margin: 10px 0;
`;
//paragraph
const PrivacyParagraph = styled(StyledParagraph)`
  margin: 10px 0;
`;
//anchor - hyperlinks
const PrivacyLink = styled(StyledAnchor)`
  font-size: ${({ theme }) => theme.font.font16};
  text-decoration: underline;
`;

export {
  TextContainer,
  PrivacyUl,
  PrivacyLink,
  PrivacySection,
  PrivacyH1,
  PrivacyH2,
  PrivacyH3,
  PrivacyParagraph,
};
