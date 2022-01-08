import { useEffect, useState, createContext } from "react";
import { IconContext } from "react-icons/lib";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import useMediaQuery, {
  IwindowDimension,
} from "./components/hooks/useMediaQuery";
import ScrollToTop from "./utilities/helpers";
import ProjectData from "./projects";

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

export const ProjectContext = createContext<Project[]>([]);
export const MediaQueryContext = createContext<IwindowDimension>({
  height: 0,
  width: 0,
});

function App() {
  const [projectState, setProjectState] = useState<Project[]>([]);
  const mediaQuery = useMediaQuery();

  useEffect(() => {
    setProjectState([...ProjectData]);
    return () => {
      setProjectState([...ProjectData]);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={mediaQuery}>
      <ProjectContext.Provider value={projectState}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <ScrollToTop />
          <Header />
          <Main />
        </IconContext.Provider>
      </ProjectContext.Provider>
    </MediaQueryContext.Provider>
  );
}

export default App;
