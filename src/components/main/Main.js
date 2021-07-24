import { Switch, Route } from "react-router-dom";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import GitHubProjects from "../pages/githubprojects/GitHubProjects";
import CodePenProjects from "../pages/codepenprojects/CodePenProjects";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
        <Route path="/GitHubProjects">
          <GitHubProjects />
        </Route>
        <Route path="/CodePenProjects">
          <CodePenProjects />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
};

export default Main;
