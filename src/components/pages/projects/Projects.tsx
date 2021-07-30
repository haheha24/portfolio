import "./projects.css";
import ProjectCard from "../../projectCards/ProjectCard";
import ProjectSearch from "./ProjectSearch";
import { useState } from "react";
import { Project } from "../../../App";

const Projects = () => {
  const [stateProject, setProject] = useState<Project[]>([]);

  return (
    <>
      <div className="projects-title-container">
        <h1>Projects!</h1>
        <h3>lots of them</h3>
      </div>
      <ProjectSearch />
      <section id="projectFlex">
        <ProjectCard />
      </section>
    </>
  );
};

export default Projects;
