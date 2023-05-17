import "./about.css";
import Skills from "./Skills";
import { useReducer } from "react";

export enum SkillsMatch {
  front = "front",
  back = "back",
  general = "general",
  interp = "interp",
}
interface ISelectedState {
  front: { isActive: boolean; active?: string; inactive?: string };
  back: { isActive: boolean; active?: string; inactive?: string };
  general: { isActive: boolean; active?: string; inactive?: string };
  interp: { isActive: boolean; active?: string; inactive?: string };
  skill: SkillsMatch;
}
interface ISelectedType {
  type: SkillsMatch;
}

const About = () => {
  //Tracks which descriptions to render
  const initialSelected: ISelectedState = {
    front: {
      isActive: true,
      active: "about-skills-btn about-skills-btn-Active",
      inactive: "about-skills-btn",
    },
    back: {
      isActive: false,
      active: "about-skills-btn about-skills-btn-Active",
      inactive: "about-skills-btn",
    },
    general: {
      isActive: false,
      active: "about-skills-btn about-skills-btn-Active",
      inactive: "about-skills-btn",
    },
    interp: {
      isActive: false,
      active: "about-skills-btn about-skills-btn-Active",
      inactive: "about-skills-btn",
    },
    skill: SkillsMatch.front,
  };

  const handleSelected = (
    state: ISelectedState,
    action: ISelectedType
  ): ISelectedState => {
    switch (action.type) {
      case "front":
        return {
          front: {
            isActive: state.front.isActive = true,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          back: {
            isActive: state.back.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          general: {
            isActive: state.general.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          interp: {
            isActive: state.interp.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          skill: action.type,
        };
      case "back":
        return {
          front: {
            isActive: state.front.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          back: {
            isActive: state.back.isActive = true,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          general: {
            isActive: state.general.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          interp: {
            isActive: state.interp.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          skill: action.type,
        };
      case "general":
        return {
          front: {
            isActive: state.front.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          back: {
            isActive: state.back.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          general: {
            isActive: state.general.isActive = true,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          interp: {
            isActive: state.interp.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          skill: action.type,
        };
      case "interp":
        return {
          front: {
            isActive: state.front.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          back: {
            isActive: state.back.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          general: {
            isActive: state.general.isActive = false,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          interp: {
            isActive: state.interp.isActive = true,
            active: state.front.active,
            inactive: state.front.inactive,
          },
          skill: action.type,
        };
      default:
        return state;
    }
  };

  const [selected, setSelected] = useReducer(handleSelected, initialSelected);

  const handleSkillBtn = (skill: SkillsMatch) => {
    setSelected({ type: skill });
  };

  return (
    <article className="text-container about-article">
      <p className="about-paragraph">
        Hello! My name is Adrian Cristallo. I am a web developer with a passion
        for making websites and coding. I am looking for opportunities of work in web
        development while in the process of studying a Bachelor of Computer Science. I have
        also completed a Bachelor of Arts, majoring in sociology and history. I
        am always ready to learn new skills as my goal is to
        make this path into a long-lasting career. On the side I enjoy a little
        bit of gardening, gaming, and landscaping. Creativity is my outlet and enjoyment
        in life.
      </p>
      <p className="about-paragraph">
        If you are interested or have any questions, I invite you to reach out to me either through email, GitHub or linkedIn!
      </p>
      <div className="about-skills-container">
        <div className="about-btn-container">
          <button
            type="button"
            className={
              selected.front.isActive
                ? selected.front.active
                : selected.front.inactive
            }
            onClick={() => handleSkillBtn(SkillsMatch.front)}
          >
            Frontend Skills
          </button>
          <button
            type="button"
            className={
              selected.back.isActive
                ? selected.back.active
                : selected.back.inactive
            }
            onClick={() => handleSkillBtn(SkillsMatch.back)}
          >
            Backend Skills
          </button>
          <button
            type="button"
            className={
              selected.general.isActive
                ? selected.general.active
                : selected.general.inactive
            }
            onClick={() => handleSkillBtn(SkillsMatch.general)}
          >
            General Dev Skills
          </button>
          <button
            type="button"
            className={
              selected.interp.isActive
                ? selected.interp.active
                : selected.interp.inactive
            }
            onClick={() => handleSkillBtn(SkillsMatch.interp)}
          >
            Interpersonal Skills
          </button>
        </div>
        <Skills skill={selected.skill} />
      </div>
    </article>
  );
};

export default About;
