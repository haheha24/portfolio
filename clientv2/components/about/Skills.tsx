"use client";

import { SkillsBubble, Ul, Paragraph, Subtitle } from "./styles";

const Skills = ({ skill }: { skill: string }) => {
  const matchSkill = (match: string) => {
    switch (match) {
      case "back":
        return (
          <>
            <Subtitle>Back-end technologies I have used in projects:</Subtitle>
            <Ul>
              <li>Node.JS</li>
              <li>NextAuth</li>
              <li>Express.JS</li>
              <li>MongoDB Atlas Cloud</li>
              <li>Mongoose.JS</li>
            </Ul>
          </>
        );
      case "general":
        return (
          <>
            <Subtitle>
              Other technologies I have experience in using are:
            </Subtitle>
            <Ul>
              <li>NPM Packages</li>
              <li>GIT Version Control</li>
              <li>Linux commands</li>
            </Ul>
          </>
        );
      case "inter":
        return (
          <>
            <Subtitle>Interpersonal Skills and Values</Subtitle>
            <Paragraph>
              My interpersonal skills are one of my most proudest achievements
              in life so far. I believe strongly that communication can resolve
              any issue, along with respect and understanding. These three
              skills and values have lead me to my successes in life and
              continue to define my decisions and actions. I courageously trust
              myself to achieve my goals in building a professional career in
              web development, and so should you believe in me when I say I can
              help you achieve your goals as well!
            </Paragraph>
          </>
        );
      default:
        return (
          <>
            <Subtitle>
              My technical skills I use for web development are:
            </Subtitle>
            <Ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.JS </li>
              <li>Jest</li>
            </Ul>
          </>
        );
    }
  };

  return <SkillsBubble data-testid="Skills">{matchSkill(skill)}</SkillsBubble>;
};

export default Skills;
