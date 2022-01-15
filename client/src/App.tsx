import { IconContext } from "react-icons/lib";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Header />
      <Main />
    </IconContext.Provider>
  );
}

export default App;
