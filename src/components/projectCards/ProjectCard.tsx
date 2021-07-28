import "./projectCard.css";
import { useContext } from "react";
import { ProjectContext} from "../../App";

const ProjectCard = () => {
  const projectData = useContext(ProjectContext);
  const projectArray = [...projectData];

  return (
    <>
      {projectArray.map((data) => {
        return (
          <div key={data.id} className="project-tile">
            <h3>{data.title}</h3>
            <p className="projectP">{data.desc}</p>
            {data.repoLink !== "N/A" && data.repoLink !== "" ? (
              <p>
                Repo link: <a href={data.repoLink}>{data.repoLink}</a>
              </p>
            ) : (
              ""
            )}
            {data.deployLink !== "N/A" && data.deployLink !== "" ? (
              <p>
                Deploy link: <a href={data.deployLink}>{data.deployLink}</a>
              </p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};
export default ProjectCard;
