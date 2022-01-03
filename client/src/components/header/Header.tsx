import "./header.css";
import Navbar from "./nav/Navbar";

const Header = () => {
  const name = `Adrian Cristallo`;
  const featureTitle = `Frontend developer with a huge passion for coding and learning`;

  return (
    <header id="header">
      <section>
        <div className="home-feature-section home-font-color">
          <h1>{name}</h1>
          <h3>{featureTitle}</h3>
        </div>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
