import ProjectCard from "../../projectCards/ProjectCard";
import { useState } from "react";
import {Project} from "../../../App"

const Projects = () => {
  const [stateProject, setProject] = useState<Project[]>([]);
  

  return (
    <section>
      {/* <ProjectCardTest /> */}
    </section>
  );
};

export default Projects;
