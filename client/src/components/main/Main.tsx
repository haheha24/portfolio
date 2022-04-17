import { Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Section from "./Section";

const Main = () => {
  return (
    <main id="container">
      <Route path="/">
        <Section setId="aboutLink" setTitle="About Me">
          <About />
        </Section>
        <Section setId="projectsLink" setTitle="Projects">
          <Projects />
        </Section>
        <Section setId="contactLink" setTitle="Contact Form">
          <Contact />
        </Section>
      </Route>
    </main>
  );
};

export default Main;
