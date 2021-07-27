import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, { useEffect, useState } from "react";
import ProjectData from './projects'

export type Project = {
  id: string | number
  title: String;
  desc: String;
  repoLink: string;
  deployLink: string;
  tags: String[];
};

export const ProjectContext = React.createContext<Project[]>([]);

function App() {
  const [projectState, setProjectState] = useState<Project[]>([])
  
  useEffect(() => {
    return setProjectState([...ProjectData])
  }, [])

  return (
    <div className="grid-container">
      <ProjectContext.Provider value={projectState}>
        <Header />
        <Main />
        <Footer />
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
