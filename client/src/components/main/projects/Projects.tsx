import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <ProjectCard
          url="https://lookup-project.herokuapp.com/"
          github="https://github.com/haheha24/lookup-repo"
          image={"http://localhost:3000/images/lookup-project-herokuapp.png"}
          altTxt="Look Up Project"
          title="Look Up Project"
          description="This is a test card for look up."
        />
      </div>
    </>
  );
};

export default Projects;
