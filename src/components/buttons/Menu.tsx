/* import { GiHamburgerMenu } from "react-icons/gi"; */
import MenuItem from './MenuItem'
import { BrowserRouter as Router } from "react-router-dom";

const Menu = () => {


  return (
    <Router>
      <MenuItem title={'About Me'} menuLink={undefined} />
    </Router>
  );
};

export default Menu;
