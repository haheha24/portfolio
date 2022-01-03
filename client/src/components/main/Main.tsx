import { Switch, Route } from "react-router-dom";
import "./main.css";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

const Main = () => {
  return (
    <main id="main">
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
