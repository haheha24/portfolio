import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, { useEffect, useState } from "react";
import ProjectData from "./projects";
import { IconContext } from "react-icons/lib";

export type Project = {
  id: string | number;
  title: string;
  desc: string;
  repoLink: string;
  deployLink: string;
  tags: string[];
  completed: boolean;
  stars: number;
};

export const ProjectContext = React.createContext<Project[]>([]);

function App() {
  const [projectState, setProjectState] = useState<Project[]>([]);

  useEffect(() => {
    return setProjectState([...ProjectData]);
  }, []);

  return (
    <div className="grid-container">
      <ProjectContext.Provider value={projectState}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <Header />
          <Main />
          <Footer />
        </IconContext.Provider>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
