import "./projectCard.css";
import { useContext } from "react";
import { ProjectContext } from "../../App";

const ProjectCard = () => {
  const projectData = useContext(ProjectContext);
  const projectArray = [...projectData];

  return (
    <>
      {projectArray.map((data) => {
        return (
          <div key={data.id} className="project-tile">
            <h3 className="project-title">{data.title}</h3>
            <p className="project-desc">{data.desc}</p>
            {data.repoLink !== "N/A" && data.repoLink !== "" ? (
              <a href={data.repoLink}>
                <p className="project-link">Repo link: {data.repoLink}</p>
              </a>
            ) : (
              ""
            )}
            {data.deployLink !== "N/A" && data.deployLink !== "" ? (
              <a href={data.deployLink}>
                <p className="project-link">Deploy link: {data.deployLink}</p>
              </a>
            ) : (
              ""
            )}
            <div className="project-tags">
              <b>{data.tags.join(", ")}</b>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProjectCard;
