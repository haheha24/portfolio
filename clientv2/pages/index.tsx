import About from "components/about/About";
import Projects from "components/projects/Projects";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center space-y-10">
      <About />
      <Projects />
      <div style={{ height: 500 }} id={"contact"}>
        contact
      </div>
    </main>
  );
};

export default Home;
