import "./about.css";

export type IhomeSubtitle = {
  itemId: string;
  itemName: string;
};

const About = () => {
  const introduction =
    "Hey! I'm Adrian Cristallo, a Front-End Developer with a passion for making websites and coding. Looking for opportunities of work in web development while I study a Bachelor of Information Technology :). I've also completed a Bachelor of Arts, majoring in sociology and history. So I guess you could say I really like learning! On the side I enjoy a little bit of gardening and landscaping. Creativity is my outlet and enjoyment in life.";
  return (
    <div className="about-grid">
      <div id="aboutLink" className="about-container">
        <section id="aboutMe" className="about-section">
          <h2 className="about-subtitle">About Me</h2>
          <p className="about-paragraph">{introduction}</p>
          <h3 className="about-subtitle">
            My technical skills I use for web development are:
          </h3>
          <p className="about-paragraph">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Jest</li>
            </ul>
          </p>
          <h3 className="about-subtitle">
            {" "}
            Back-end technologies I have used in projects:
          </h3>
          <p className="about-paragraph">
            <ul>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>Mongoose</li>
            </ul>
          </p>
          <h3 className="about-subtitle">
            Other technologies I have experience in using are:
          </h3>
          <p className="about-paragraph">
            <ul>
              <li>MongoDB Atlas Cloud</li>
              <li>
                NPM Packages and the various libraries and frameworks that are
                available
              </li>
              <li>
                GIT Version Control and Linux Commands using GitBash intergrated
                terminal
              </li>
            </ul>
          </p>
          <h3 className="about-subtitle">Interpersonal Skills and Values</h3>
          <p className="about-paragraph">
            My interpersonal skills are one of my most proudest achievements in
            life so far. I believe strongly that communication can resolve any
            issue, along with respect and understanding. These three skills and
            values have lead me to my successes in life and continue to define
            my decisions and actions. I courageously trust myself to achieve my
            goals in building a professional career in web development, and so
            should you believe in me when I say I can help you achieve your
            goals as well!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
