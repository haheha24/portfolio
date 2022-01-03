import Main from "./components/main/Main";
import Header from "./components/header/Header";
import React, { useEffect, useState } from "react";
import useMediaQuery, {
  IwindowDimension,
} from "./components/hooks/useMediaQuery";
import ProjectData from "./projects";
import { IconContext } from "react-icons/lib";

export type Project = {
  id: string | number;
  title: string;
  desc: string;
  repoLink?: string;
  deployLink?: string;
  tags: string[];
  completed: boolean;
  stars: number;
};

export const ProjectContext = React.createContext<Project[]>([]);
export const MediaQueryContext = React.createContext<IwindowDimension>({
  height: 0,
  width: 0,
});

function App() {
  const [projectState, setProjectState] = useState<Project[]>([]);
  const mediaQuery = useMediaQuery();

  useEffect(() => {
    return setProjectState([...ProjectData]);
  }, []);

  return (
    
      <MediaQueryContext.Provider value={mediaQuery}>
        <ProjectContext.Provider value={projectState}>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <Header />
            <Main />
          </IconContext.Provider>
        </ProjectContext.Provider>
      </MediaQueryContext.Provider>
    
  );
}

export default App;
