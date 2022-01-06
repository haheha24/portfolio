import Main from "./components/main/Main";
import Header from "./components/header/Header";
import { useEffect, useState, createContext } from "react";
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

export const ProjectContext = createContext<Project[]>([]);
export const MediaQueryContext = createContext<IwindowDimension>({
  height: 0,
  width: 0,
});
export const IsHomePage = createContext<boolean>(true);

function App() {
  const [projectState, setProjectState] = useState<Project[]>([]);
  const [isHome, setIsHome] = useState<boolean>(true);
  const mediaQuery = useMediaQuery();

  const windowLocation = () => {
    if (window.location.origin !== window.location.href) {
      return setIsHome(false);
    }
    return setIsHome(true);
  };

  useEffect(() => {
    windowLocation();
    setProjectState([...ProjectData]);
    return () => {
      windowLocation();
      setProjectState([...ProjectData]);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={mediaQuery}>
      <ProjectContext.Provider value={projectState}>
        <IsHomePage.Provider value={isHome}>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <Header />
            <Main />
          </IconContext.Provider>
        </IsHomePage.Provider>
      </ProjectContext.Provider>
    </MediaQueryContext.Provider>
  );
}

export default App;
