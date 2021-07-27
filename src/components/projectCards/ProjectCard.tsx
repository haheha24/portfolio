import "./projectCard.css";
import React, { useContext } from "react";
import { ProjectContext, Project } from "../../App";

const ProjectCard = () => {
  const projectData = useContext(ProjectContext);
  const projectArray = [...projectData];

  return (
    <>
      {projectArray.map((data) => {
        return (
          <div key={data.id} className="project-tile">
            <a href={data.repoLink}>
              <h3>{data.title}</h3>
            </a>
            <p className="projectP">{data.desc}</p>
          </div>
        );
      })}{" "}
    </>
  );
};
export default ProjectCard;
