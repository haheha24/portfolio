import "./projects.css";
import ProjectCard from "./projectCards/ProjectCard";
import ProjectSearch from "./projectForm/ProjectSearch";

const Projects = () => {
  return (
    <>
      <div className="projects-title-container">
        <h1>Projects!</h1>
        <h3>lots of them</h3>
      </div>
      <ProjectSearch />
      <ProjectCard />
    </>
  );
};

export default Projects;
