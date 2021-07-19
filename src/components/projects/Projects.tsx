import "./projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="project-main-title">Projects</h1>
      <div id="project-flex">
        <ProjectCard
          title={"FCC: Technical Documentation Page"}
          desc={
            "This is a single page JavaScript project done on my codepen.io"
          }
          proLink={"https://codepen.io/haheha/"}
          cpenLink={"https://codepen.io/haheha24/pen/VwPdxeB"}
        />
        <ProjectCard
          title={"Product Landing Page"}
          desc={
            "This is a single page Product Landing Page project done on my codepen.io"
          }
          proLink={"https://codepen.io/haheha/"}
          cpenLink={"https://codepen.io/haheha24/pen/poRVGZQ"}
        />
        <ProjectCard
          title={"FCC: Survey Form"}
          desc={
            "This is a single page Survey Form project done on my codepen.io"
          }
          proLink={"https://codepen.io/haheha/"}
          cpenLink={"https://codepen.io/haheha24/pen/LYxmYVL"}
        />
        <ProjectCard
          title={"FCC: Tribute Page"}
          desc={
            "This is a single page Tribute Page project done on my codepen.io"
          }
          proLink={"https://codepen.io/haheha/"}
          cpenLink={"https://codepen.io/haheha24/pen/XWpMxqL"}
        />
      </div>
    </section>
  );
};

export default Projects;
