import About from "components/about/About";
import Contact from "components/contact/Contact";
import Projects from "components/projects/Projects";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center space-y-10">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
