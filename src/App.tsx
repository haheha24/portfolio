import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Resume">
          <About />
        </Route>
        <Route path="/GitHubProjects">
          <About />
        </Route>
        <Route path="/CodePenProjects">
          <About />
        </Route>
        <Route path="/"></Route>
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
