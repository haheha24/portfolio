import "./GitHubProjects.css";
import ProjectCard from "../../projectCards/ProjectCard";

const GitHubProjects = () => {
  const projectNames = [
    "JavaScript",
    "Product Landing Page",
    "Survey Form",
    "Tribute Page",
  ];

  return (
    <main className="projectsGH">
      <h1 className="project-main-title">GitHub Projects</h1>
      <div className="project-flex">
        <ProjectCard
          title={"FCC: Technical Documentation Page"}
          proName={projectNames[0]}
          desc={`This is a single page ${projectNames[0]} project done on my codepen.io`}
          proLink={"https://codepen.io/haheha24/pen/VwPdxeB"}
        />
      </div>
    </main>
  );
};

export default GitHubProjects;
