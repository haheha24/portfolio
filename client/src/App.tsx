import { IconContext } from "react-icons/lib";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ScrollToTop from "./utilities/helpers";

function App() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <ScrollToTop />
      <Header />
      <Main />
    </IconContext.Provider>
  );
}

export default App;
