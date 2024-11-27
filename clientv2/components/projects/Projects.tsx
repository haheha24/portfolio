import ProjectCard from "./ProjectCard";
import { H2 } from "components/Heading";
import portfolioImg from "../../public/images/portfolio.png";
import WIP from "../../public/images/work_in_progress.jpg";
import movieRestApp from "../../public/images/movie-rest-app.png";
import naughtsAndCrosses from "../../public/images/naughts-and-crosses.png";
import connect4 from "../../public/images/connect4.png";

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
          github="https://github.com/haheha24/Movie-REST-App"
          image={movieRestApp}
          altTxt="Movie Rest App Thumbnail"
          title="Movie Rest App"
          description="A portfolio project to demonstrate a PHP REST application based on Movies."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/naught-and-crosses"
          image={naughtsAndCrosses}
          altTxt="Naughts and Crosses"
          title="Naughts and Crosses"
          description="A personal project to learn basic game design using Raylib in C++."
        />
        <ProjectCard
          url=""
          github="https://github.com/haheha24/connect4"
          image={connect4}
          altTxt="Connect 4"
          title="Connect 4"
          description="A personal project that builds upon lessons learnt from Naughts and Crosses using Raylib in C++"
        />
        
        {/**
         * NAUGHTS AND CROSSES
         * CONNECT 4
         * 
         * CREATE JSON FILE AND STORE / LOAD FROM TO SETUP FOR REST-LIKE API
         */}
      </div>
    </section>
  );
};

export default Projects;
