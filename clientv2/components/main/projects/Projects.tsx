import ProjectCard from "./ProjectCard";
import { ProjectContainer } from "./projectsStyledComponents";

const Projects = () => {
  return (
    <>
      <ProjectContainer>
        <ProjectCard
          url=""
          github="https://github.com/haheha24/portfolio"
          image="/images/portfolio.png"
          altTxt="Portfolio Feature Image"
          title="Portfolio"
          description="My portfolio website you are currently viewing."
        />
        <ProjectCard
          url="https://mysticcoven.com.au/"
          github=""
          image="/images/mysticcoven.png"
          altTxt="Mystic Coven Feature Image"
          title="Mystic Coven"
          description="A business website for Mystic Coven. Customised Wordpress theme of Elegant Fashion by Rara Themes."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/planner-app"
          altTxt="Work in progress"
          title="Planner App"
          description="A personalised planning app that can integrate with your email."
        />
      </ProjectContainer>
    </>
  );
};

export default Projects;
