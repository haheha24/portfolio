import Skills from "./Skills";
import { H2 } from "components/Heading";

const About = () => {
  const PClass = "list-inside md:mx-[12.5%] mx-2 my-0 text-dynamic-lg";
  return (
    <section id="about" className="space-y-5">
      <H2>About</H2>
      <p className={PClass}>
        Welcome! My name is{" "}
        <span className="text-dynamic-2xl">Adrian Cristallo</span>.
      </p>
      <p className={PClass}>
        An aspiring junior developer eager to leverage my strong analytical
        skills and foundational programming knowledge in Python, JavaScript and
        C++ to create efficient and user-friendly software solutions. Passionate
        about continuous learning, solving complex problems, and contributing to
        innovative development projects. I have recently completed a Diploma of
        Information Technology, and prior to this, a Bachelor of Arts majoring
        in Sociology and History.
      </p>
      <p className={PClass}>
        I am always ready to learn new skills as my goal is to make this path
        into a long-lasting career. On the side I enjoy a staying fit, gardening
        and landscaping, as well as gaming! Being creative fulfils me and brings
        me the most joy, whether it be writing code, drawing, or more abstract
        activites such as philosophical conversations or problem solving.
        Creating and using all of the different aspects of information
        technology is so incredibly fascinating that I had to start learning it
        myself. I began learning web development in 2020 during Covid and have
        taught myself nearly everything I know about programming and IT.
      </p>
      <p className={PClass}>
        My interpersonal skills are one of my most proudest achievements in life
        so far. I believe strongly that transparent communication can lead to
        most problems being solved when engaging with respect and compassion.
        These values have lead to my successes in life and continue to define my
        decisions and actions. I courageously trust myself to achieve my goals
        in building a professional career in software development. So when I say
        I can help you achieve your professional goals, you should believe it!
      </p>
      <Skills />
    </section>
  );
};

export default About;
