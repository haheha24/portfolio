import "./about.css";
import { useEffect, useState } from "react";
import { SkillsMatch } from "./About";

interface ISkillsMatch {
  skill: SkillsMatch;
}

const Skills = ({ skill }: ISkillsMatch) => {
  const [mySkill, setMySkill] = useState("front");

  useEffect(() => {
    setMySkill(skill);
  }, [skill]);

  const matchSkill = (match: string) => {
    switch (match) {
      case "back":
        return (
          <div className="skills-container bg-speech-bubble">
            <h3 className="about-subtitle">
              Back-end technologies I have used in projects:
            </h3>
            <ul className="about-paragraph">
              <li>Node.JS</li>
              <li>NextAuth</li>
              <li>Express.JS</li>
              <li>MongoDB Atlas Cloud</li>
              <li>Mongoose.JS</li>
            </ul>
          </div>
        );
      case "general":
        return (
          <div className="skills-container bg-speech-bubble">
            <h3 className="about-subtitle">
              Other technologies I have experience in using are:
            </h3>
            <ul className="about-paragraph">
              <li>NPM Packages</li>
              <li>GIT Version Control</li>
              <li>Linux commands</li>
            </ul>
          </div>
        );
      case "interp":
        return (
          <div className="skills-container bg-speech-bubble">
            <h3 className="about-subtitle">Interpersonal Skills and Values</h3>
            <p className="about-paragraph">
              My interpersonal skills are one of my most proudest achievements
              in life so far. I believe strongly that communication can resolve
              any issue, along with respect and understanding. These three
              skills and values have lead me to my successes in life and
              continue to define my decisions and actions. I courageously trust
              myself to achieve my goals in building a professional career in
              web development, and so should you believe in me when I say I can
              help you achieve your goals as well!
            </p>
          </div>
        );
      default:
        return (
          <div className="skills-container bg-speech-bubble">
            <h3 className="about-subtitle">
              My technical skills I use for web development are:
            </h3>
            <ul className="about-paragraph">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.JS </li>
              <li>Jest</li>
            </ul>
          </div>
        );
    }
  };

  return <>{matchSkill(mySkill)}</>;
};

export default Skills;
