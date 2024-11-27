"use client";

const Skills = ({ skill }: { skill: string }) => {
  const matchSkill = (match: string) => {
    switch (match) {
      case "back":
        return (
          <ul key="back" className="animate-spring transition-transform">
            <li>Node.JS</li>
            <li>NextAuth</li>
            <li>Express.JS</li>
            <li>MongoDB Atlas Cloud</li>
            <li>Mongoose.JS</li>
          </ul>
        );
      case "general":
        return (
          <ul key="general" className="animate-spring transition-transform">
            <li>NPM Packages</li>
            <li>GIT Version Control</li>
            <li>Linux commands</li>
          </ul>
        );
      case "inter":
        return (
          <p key="inter" className="animate-spring transition-transform">
            My interpersonal skills are one of my most proudest achievements in
            life so far. I believe strongly that communication can resolve any
            issue, along with respect and understanding. These three skills and
            values have lead me to my successes in life and continue to define
            my decisions and actions. I courageously trust myself to achieve my
            goals in building a professional career in web development, and so
            should you believe in me when I say I can help you achieve your
            goals as well!
          </p>
        );
      default:
        return (
          <ul key="front" className="animate-spring transition-transform">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.JS </li>
            <li>Jest</li>
          </ul>
        );
    }
  };

  return (
    <article
      className="p-5 max-h-full text-dynamic-lg sm:rounded-t-sm sm:rounded-b-xl rounded-none border-x-2 border-b-2 border-solid border-black-primary bg-purple-primary"
      aria-label="container"
      data-testid="Skills"
    >
      {matchSkill(skill)}
    </article>
  );
};

export default Skills;
