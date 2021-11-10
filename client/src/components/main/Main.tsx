import { Switch, Route } from "react-router-dom";
import "./main.css"
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import Home from "../pages/home/Home";

const Main = () => {
  return (
    <main id="main">
      <Switch>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
