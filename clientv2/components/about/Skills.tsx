import { useState } from "react";
import Button from "components/Button";

import Dbms from "./skills/Dbms";
import Programming from "./skills/Programming";
import Technical from "./skills/Technical";
import Tools from "./skills/Tools";

const Skills = () => {
  const [skill, setSkill] = useState("programming");
  const handleSkillBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSkill(e.currentTarget.name);
  };
  const ButtonClass =
    "lg:text-dynamic-lg data-[active=true]:bg-purple-primary bg-purple-secondary hover:bg-purple-primary hover:underline p-2 sm:rounded-t-3xl border-t-[2.5px] border-x-[2.5px] border-solid border-black-primary transition-colors";
  const matchSkill = (match: string) => {
    switch (match) {
      case "tools":
        return <Tools />;
      case "dbms":
        return <Dbms />;
      case "skills":
        return <Technical />;
      default:
        return <Programming />;
    }
  };

  return (
    <div aria-label="container" className="flex flex-col md:mx-[12.5%] pt-5">
      <div aria-label="button container" className="flex sm:flex-row flex-col">
        <Button
          type="button"
          name="programming"
          aria-label="Programming Languages Button"
          className={ButtonClass}
          tapAnimation={false}
          data-active={skill === "programming" ? true : false}
          onClick={(e) => handleSkillBtn(e)}
        >
          <h3>Programming Languages</h3>
        </Button>
        <Button
          type="button"
          name="tools"
          aria-label="Frameworks, libraries and tools Button"
          className={ButtonClass}
          tapAnimation={false}
          data-active={skill === "tools" ? true : false}
          onClick={(e) => handleSkillBtn(e)}
        >
          <h3>Frameworks, libraries and tools</h3>
        </Button>
        <Button
          type="button"
          name="dbms"
          aria-label="Database Management Systems Button"
          className={ButtonClass}
          tapAnimation={false}
          data-active={skill === "dbms" ? true : false}
          onClick={(e) => handleSkillBtn(e)}
        >
          <h3>Database Management Systems</h3>
        </Button>
        <Button
          type="button"
          name="skills"
          aria-label="Other skills and Technical Proficiencies Button"
          className={ButtonClass}
          tapAnimation={false}
          data-active={skill === "skills" ? true : false}
          onClick={(e) => handleSkillBtn(e)}
        >
          <h3>Other skills and Technical Proficiencies</h3>
        </Button>
      </div>
      <article
        className="p-5 min-h-80 h-auto text-dynamic-lg sm:rounded-t-sm sm:rounded-b-xl rounded-none border-x-2 border-b-2 border-solid border-black-primary bg-purple-primary"
        aria-label="container"
        data-testid="Skills"
      >
        {matchSkill(skill)}
      </article>
    </div>
  );
};

export default Skills;
