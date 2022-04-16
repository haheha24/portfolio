import "./projects.css";
import ProjectCard from "./ProjectCard";
import lookUp from "../../../../images/lookup-project-herokuapp.png";

const Projects = () => {
  return (
    <>
      <section id="projectsLink" className="section-container">
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          <ProjectCard
            url="https://lookup-project.herokuapp.com/"
            image={lookUp}
            altTxt="Look Up Project"
            title="Look Up Project"
            description="This is a test card for look up."
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
