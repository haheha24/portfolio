import "./home.css";
import SideNavBar from "../../sideNavBar/SideNavBar";

export type IhomeSubtitle = {
  itemId: string;
  itemName: string;
};

const Home = () => {
  const homeSubtitleArray: IhomeSubtitle[] = [
    { itemId: "aboutMe", itemName: "About me" },
    {
      itemId: "loveSoftware",
      itemName: "Why I love software development!",
    },
  ];

  return (
    <>
      <SideNavBar navArray={homeSubtitleArray} sideNavTitle="Welcome" />
      <div className="home-container">
        <h1 className="home-title">Welcome</h1>
        <section id="aboutMe" className="home-section">
          <h2 className="home-subtitle">About Me</h2>
          <p className="home-paragraph">
            I'm Adrian Cristallo and hello! Thanks for visiting my website.
          </p>
        </section>
        <section id="loveSoftware" className="home-section">
          <h2 className="home-subtitle">Why I love software development!</h2>
          <p className="home-paragraph">
            During covid lockdown, I needed a new hobby. I ended up taking on
            figure and portrait graphite drawing and .. web development!
          </p>
          <p className="home-paragraph">
            It was so exciting to begin learning about HTML and CSS. I had
            limited prior knowledge back from high school but never followed
            through with it. It wasn't too daunting at first. I spent many hours
            each day practicing and practicing until I understood what the
            basics of web development were.
          </p>
          <p className="home-paragraph">
            Learning HTML was quite easy and comfortable. That feeling ended
            quickly when trying to learn and apply CSS outside of a basic
            background color. I was taking it slow, trying to not overwhelm
            myself with constant new information of modern practices. I took
            knowing the basics seriously and spent a good amount of time
            developing my fundamentals of web development. I even read up on the
            past 20-30 years of web development history to gain a better
            understanding. It was quite interesting to say the least. From this,
            I came to understand that my next goal would be learning JavaScript.
          </p>
          <p className="home-paragraph">
            During my initial reading of JavaScript, it became apparent that it
            had evolved quite a bit compared to it's early 2000 days.
            Libraries?! Frameworks!? Backend servers? It just went on. In all of
            this, I came across this phenomenon called <b>React</b>. It was a
            library, <i>but confused as a framework</i>, of JavaScript. It
            sounded overwhelming but also extremely cool. This motivated me to
            want to learn React and know how to use it. Putting my problem
            solving cap back on, how was I going to get to this point of
            expertise? So back on the study wagon, I reigned in my curiosity and
            made a plan on how I was going to achieve my goal. I had to first
            learn JavaScript.
          </p>
          <p className="home-paragraph">
            JavaScript was (and still is) my actual challenge. I had overcome
            HTML and CSS with relative ease over time. JavaScript challenged me
            because it wasn't as clear as the previous two languages. It
            required so much more of my wit and problem solving skills. I won't
            lie, I struggled for the first 6 months. However, I kept at it! I
            was determined to learn this new challenge and so, my first task
            that I identified was to learn the language fundamentals. Syntax and
            statements, expressions, primitive values, operators, functions,
            objects, the list could go on. Like I mentioned, it's still a
            challenge but that's the fantastic thing, learning it has become a
            passion. It never really feels like a chore.
          </p>
          <p className="home-paragraph">
            Fast forward to the present, I put in the effort and learnt the
            fundamentals, learnt how to read JavaScript documentation, as well
            as how to use a variety of resources to help me learn and problem
            solve. I am still learning, <i>a lot</i>, and have much more to
            learn! I can safely say I can use React and incorporate it with
            other npm packages to build websites. I even taught myself a bit of
            backend development. It was really interesting learning how to make
            a MERN stack application. Every step was a challenge but the
            gratifaction of solving each problem was like ecstacy.
          </p>
          <p className="home-paragraph">
            In summary, I started out learning HTML and CSS which was a comfy
            experience. Learning JavaScript was a wake up call, realising the
            peak that I felt like I had reached with HTML and CSS was only an
            illusion and in actual fact just the base of the summit. Through
            learning the JavaScript fundamentals, I was able to begin my journey
            of learning the modern web development experience through React.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
