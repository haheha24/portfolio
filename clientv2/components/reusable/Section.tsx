import { ReactNode } from "react";
import styled from "styled-components";
import { HTMLMotionProps, motion } from "framer-motion";
import { StyledSection, StyledH2 } from "../styledComponents";

//Component Props
interface ISection {
  id?: string;
  title?: string;
  props?: HTMLMotionProps<"section">;
  children?: ReactNode;
}

//Styled and Motion Components
const SecctionContainer = motion(StyledSection);
const H2 = styled(StyledH2)`
    text-align: center;
    color: ${(props) => props.theme.section.title.fontColor};
    font-size: 2.5rem;
    width: 100%;
    margin-bottom: 30px;
    padding: 10px 0;
    background-color: ${(props) => props.theme.section.title.backgroundColor};
    box-shadow: 0 10px 10px ${(props) => props.theme.section.title.boxShadow};
  `;

const Section = ({ id, title, children, props }: ISection) => {
  return (
    <SecctionContainer
      id={id}
      initial={{ opacity: 0, y: "250px" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        y: { duration: 1.5 },
        default: { ease: "linear" },
      }}
      data-testid="section-container"
      {...props}
    >
      <H2 data-testid="section-h2">{title}</H2>
      {children}
    </SecctionContainer>
  );
};

export default Section;
