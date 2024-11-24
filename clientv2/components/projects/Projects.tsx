import ProjectCard from "./ProjectCard";
import { H2 } from "components/Heading";
import portfolioImg from "../../public/images/portfolio.png";
import WIP from "../../public/images/work_in_progress.jpg";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <H2>Projects</H2>
      <div
        aria-roledescription="container"
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch px-5"
      >
        <ProjectCard
          url=""
          github="https://github.com/haheha24/portfolio"
          image={portfolioImg}
          altTxt="Portfolio Feature Image"
          title="Portfolio"
          description="My portfolio website you are currently viewing."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/planner-app"
          image={WIP}
          altTxt="Work in progress"
          title="Planner App"
          description="A personalised planning app that can integrate with your email."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/planner-app"
          image={WIP}
          altTxt="Work in progress"
          title="Planner App"
          description="A personalised planning app that can integrate with your email."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/planner-app"
          image={WIP}
          altTxt="Work in progress"
          title="Planner App"
          description="A personalised planning app that can integrate with your email."
        />
      </div>
    </section>
  );
};

export default Projects;
