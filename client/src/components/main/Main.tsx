import "./main.css";
import { Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

const Main = () => {
  return (
    <div id="container">
      <Route path="/">
        <About />
        <Projects />
        <Contact />
      </Route>
    </div>
  );
};

export default Main;
