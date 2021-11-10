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
              <div className="">
                <a href={data.repoLink}>
                  <p className="project-link">Repo link</p>
                </a>
              </div>
            ) : (
              ""
            )}
            {data.deployLink !== "N/A" &&
            data.deployLink !== "" &&
            data.deployLink !== undefined ? (
              <div className="">
                <a href={data.deployLink}>
                  <p className="project-link">Deploy link</p>
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="project-tags">
              <b>{data.tags.join(", ")}</b>
            </div>
            <div className="project-stars">
              {data.stars === 3 ? (
                <>
                  <BsStar style={{ color: "black" }} />{" "}
                  <BsStar style={{ color: "black" }} />{" "}
                  <BsStar style={{ color: "black" }} />
                </>
              ) : data.stars === 2 ? (
                <>
                  <BsStar style={{ color: "black" }} />
                  <BsStar style={{ color: "black" }} />
                </>
              ) : data.stars === 1 ? (
                <BsStar style={{ color: "black" }} />
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
