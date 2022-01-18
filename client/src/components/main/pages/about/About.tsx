import "./about.css";

export type IhomeSubtitle = {
  itemId: string;
  itemName: string;
};

const About = () => {

  return (
    <div className="about-grid">
      <div id="aboutLink" className="about-container">
        <section id="aboutMe" className="about-section">
          <h2 className="about-subtitle">About Me</h2>
          <p className="about-paragraph">
            Hey! I’m Adrian Cristallo, a Front-End Developer with a passion for
            making websites and coding. Looking for opportunities while I study
            a Bachelor of Information Technology :). I’ve also completed a
            Bachelor of Arts, majoring in sociology and history. So I guess
            you could say I really like learning! On the side I enjoy a little
            bit of gardening and landscaping. Creativity is my outlet and
            enjoyment in life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
