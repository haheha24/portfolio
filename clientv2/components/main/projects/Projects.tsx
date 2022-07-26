import ProjectCard from "./ProjectCard";
import imgPortfolio from "../../images/portfolio.png";
import imgMysticCoven from "../../images/mysticcoven.png";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <ProjectCard
          url=""
          github="https://github.com/haheha24/portfolio"
          image={imgPortfolio}
          altTxt="Portfolio Feature Image"
          title="Portfolio"
          description="My portfolio website you are currently viewing."
        />
        <ProjectCard
          url="https://mysticcoven.com.au/"
          github=""
          image={imgMysticCoven}
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
      </div>
    </>
  );
};

export default Projects;
