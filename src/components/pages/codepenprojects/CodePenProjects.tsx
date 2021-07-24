import "./CodePenProjects.css";
import ProjectCard from "../../projectCards/ProjectCard";

const CodePenProjects = () => {
  const projectNames = [
    "JavaScript",
    "Product Landing Page",
    "Survey Form",
    "Tribute Page",
  ];

  return (
    <main className="projectsCP">
      <h1 className="project-main-title">CodePen Projects</h1>
      <div className="project-flex">
        <ProjectCard
          title={"FCC: Technical Documentation Page"}
          proName={projectNames[0]}
          desc={`This is a single page ${projectNames[0]} project done on my codepen.io`}
          proLink={"https://codepen.io/haheha24/pen/VwPdxeB"}
        />
        <ProjectCard
          title={"Product Landing Page"}
          proName={projectNames[1]}
          desc={`This is a single page ${projectNames[1]} project done on my codepen.io`}
          proLink={"https://codepen.io/haheha24/pen/poRVGZQ"}
        />
        <ProjectCard
          title={"FCC: Survey Form"}
          proName={projectNames[2]}
          desc={`This is a single page ${projectNames[2]} project done on my codepen.io`}
          proLink={"https://codepen.io/haheha24/pen/LYxmYVL"}
        />
        <ProjectCard
          title={"FCC: Tribute Page"}
          proName={projectNames[3]}
          desc={`This is a single page ${projectNames[3]} project done on my codepen.io`}
          proLink={"https://codepen.io/haheha24/pen/XWpMxqL"}
        />
      </div>
    </main>
  );
};

export default CodePenProjects;
