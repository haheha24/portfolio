import { ReactNode } from "react";
import styled from "styled-components";
import { HTMLMotionProps, motion } from "framer-motion";
import { StyledSection, StyledH1 } from "../(styles)/globalStyledComponents";

//Component Props
interface ISection {
  id?: string;
  title?: string;
  props?: HTMLMotionProps<"section">;
  children?: ReactNode;
}

//Styled and Motion Components
const SectionContainer = motion(StyledSection);
const H1 = styled(StyledH1)`
  text-align: center;
  color: ${(props) => props.theme.section.title.fontColor};
  font-size: ${(props) => props.theme.font.font40};
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.section.title.backgroundColor};
  box-shadow: 0 10px 10px ${(props) => props.theme.section.title.boxShadow};
`;

const Divider = styled.div`
  color: ${(props) => props.theme.section.title.fontColor};
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.section.title.backgroundColor};
  box-shadow: 0 10px 10px ${(props) => props.theme.section.title.boxShadow};
`;

const Section = ({ id, title, children, props }: ISection) => {
  return (
    <SectionContainer id={id} data-testid="section-container" {...props}>
      {title && <H1 data-testid="section-h2">{title}</H1>}
      {!title && <Divider data-testid="section-h2" />}
      {children}
    </SectionContainer>
  );
};

export default Section;
