import "./projectCard.css";
import { BsStar } from "react-icons/bs";
//App import
import { Project } from "../../../../App";

const ProjectCard = (props: { cardArray: Project[] }) => {
  return (
    <section id="projectFlex">
      {props.cardArray.map((data) => {
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
            <div className="project-stars">
              {data.stars === 3 ? (
                <>
                  <BsStar style={{ color: "yellow" }} />{" "}
                  <BsStar style={{ color: "yellow" }} />{" "}
                  <BsStar style={{ color: "yellow" }} />
                </>
              ) : data.stars === 2 ? (
                <>
                  <BsStar style={{ color: "yellow" }} />
                  <BsStar style={{ color: "yellow" }} />
                </>
              ) : data.stars === 1 ? (
                <BsStar style={{ color: "yellow" }} />
              ) : null}{" "}
              {data.completed === true ? (
                <span style={{ color: "green" }}>Completed</span>
              ) : (
                <span style={{ color: "red" }}>Not Completed</span>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default ProjectCard;
