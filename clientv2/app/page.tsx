"use client";

import { StyledMain as Main } from "./(styles)/globalStyledComponents";
import Section from "./(components)/Section";
import Projects from "./(projects)/Projects";
import About from "./(about)/About";
import Contact from "./contact/Contact";
import Header from "./(header)/Header";
import Footer from "./(footer)/footer";

export default function Home({}) {
  return (
    <>
      <Header viewport={860} />
      <Main>
        <Section id="about" title="About">
          <About />
        </Section>
         {/*<Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section> */}
      </Main>
      <Footer />
    </>
  );
}
