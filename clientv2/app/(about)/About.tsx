"use client";

import Skills from "./Skills";
import React, { useState } from "react";
import {
  TextContainer,
  Paragraph,
  SkillsContainer,
  SkillsBtnContainer,
  SkillsBtn,
} from "./styles";

const About = () => {
  const [selected, setSelected] = useState("front");

  const handleSkillBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelected(e.currentTarget.name);
  };

  return (
    <TextContainer>
      <Paragraph data-testid="introduction">
        Hello! My name is Adrian Cristallo. I am a web developer with a passion
        for making websites and coding. I am looking for opportunities of work in web
        development while in the process of studying a Bachelor of Computer Science. I have
        also completed a Bachelor of Arts, majoring in sociology and history. I
        am always ready to learn new skills as my goal is to
        make this path into a long-lasting career. On the side I enjoy a little
        bit of gardening, gaming, and landscaping. Creativity is my outlet and enjoyment
        in life.
      </Paragraph>
      <SkillsContainer>
        <SkillsBtnContainer data-testid="skills-btn-container">
          <SkillsBtn
            type="button"
            name="front"
            active={selected === "front" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
            data-testid="front"
          >
            Frontend Skills
          </SkillsBtn>
          <SkillsBtn
            type="button"
            name="back"
            active={selected === "back" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
            data-testid="back"
          >
            Backend Skills
          </SkillsBtn>
          <SkillsBtn
            type="button"
            name="general"
            active={selected === "general" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
            data-testid="general"
          >
            General Dev Skills
          </SkillsBtn>
          <SkillsBtn
            type="button"
            name="inter"
            active={selected === "inter" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
            data-testid="inter"
          >
            Interpersonal Skills
          </SkillsBtn>
        </SkillsBtnContainer>
        <Skills skill={selected} />
      </SkillsContainer>
    </TextContainer>
  );
};

export default About;
