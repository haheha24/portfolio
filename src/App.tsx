import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import GitHubProjects from "./components/githubprojects/GitHubProjects";
import CodePenProjects from "./components/codepenprojects/CodePenProjects";

function App() {
  return (
    <div className="grid-container">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
