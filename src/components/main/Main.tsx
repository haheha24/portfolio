import "./main.css";
import { Switch, Route } from "react-router-dom";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/Projects";
import ProjectCard from "../projectCards/ProjectCard";

const Main = () => {
  return (
    <main style={{ gridRow: "2/3" }}>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </main>
  );
};

export default Main;
