"use client";

import Skills from "./Skills";
import React, { useState } from "react";
import Button from "components/Button";
import { H2 } from "components/Heading";

const About = () => {
  const [selected, setSelected] = useState("front");

  const handleSkillBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelected(e.currentTarget.name);
  };

  const PClass = "list-inside md:mx-[12.5%] mx-2 my-0 text-dynamic-lg";
  const ButtonClass =
    "lg:text-dynamic-lg data-[active=true]:bg-purple-primary bg-purple-secondary hover:bg-purple-primary p-2 sm:rounded-t-3xl border-t-[2.5px] border-x-[2.5px] border-solid border-black-primary transition-colors";

  return (
    <section id="about" className="m-0 border-purple-primary space-y-5">
      <H2>About</H2>
      <p className={PClass}>
        <span className="text-dynamic-2xl">Welcome!</span> My name is{" "}
        <span className="text-dynamic-2xl">Adrian Cristallo</span>.
      </p>
      <p className={PClass}>
        I am a web developer with a passion for making websites and coding. I am
        looking for opportunities of work in web development while in the
        process of studying a Bachelor of Computer Science. I have also
        completed a Bachelor of Arts, majoring in sociology and history.
      </p>
      <p className={PClass}>
        I am always ready to learn new skills as my goal is to make this path
        into a long-lasting career. On the side I enjoy a little bit of
        gardening, gaming, and landscaping. Creativity is my outlet and
        enjoyment in life.
      </p>
      <div aria-label="container" className="flex flex-col md:mx-[12.5%] pt-5">
        <div
          aria-label="button container"
          className="flex sm:flex-row flex-col"
        >
          <Button
            type="button"
            name="front"
            aria-label="Frontend Skills Button"
            className={`${ButtonClass}`}
            tapAnimation={false}
            data-active={selected === "front" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
          >
            <h3>Frontend Skills</h3>
          </Button>
          <Button
            type="button"
            name="back"
            aria-label="Backend Skills Button"
            className={`${ButtonClass}`}
            tapAnimation={false}
            data-active={selected === "back" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
          >
            <h3>Backend Skills</h3>
          </Button>
          <Button
            type="button"
            name="general"
            aria-label="General Skills Button"
            className={`${ButtonClass}`}
            tapAnimation={false}
            data-active={selected === "general" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
          >
            <h3>General Dev Skills</h3>
          </Button>
          <Button
            type="button"
            name="inter"
            aria-label="Interpersonal Skills Button"
            className={`${ButtonClass}`}
            tapAnimation={false}
            data-active={selected === "inter" ? true : false}
            onClick={(e) => handleSkillBtn(e)}
          >
            <h3>Interpersonal Skills</h3>
          </Button>
        </div>
        <Skills skill={selected} />
      </div>
    </section>
  );
};

export default About;
