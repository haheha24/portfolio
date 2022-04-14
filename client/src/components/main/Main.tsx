import { Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

const Main = () => {
  return (
    <main id="container">
      <Route path="/">
        <About />
        <Projects />
        <Contact />
      </Route>
    </main>
  );
};

export default Main;
