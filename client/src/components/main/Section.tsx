import { ReactNode, useState, useEffect, useRef } from "react";
import _ from "lodash/debounce";
import "./main.css";

interface ISection {
  setId: string;
  setTitle: string;
  children?: ReactNode;
}

const Section = ({ setId, setTitle, children = "" }: ISection) => {
  const [animation, setAnimation] = useState(false);
  const [isElementVisible, setIsElementVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  //handleScroll function to alter state
  useEffect(() => {
    const currentRef = sectionRef.current;
    //sets the isHome
    //callback to set the state of isElementVisible. If the bottom of currentRef is greater than the scrollY, set true else false
    const handleScroll = _(() => {
      window.scrollY > currentRef!.getBoundingClientRect().top
        ? setIsElementVisible(true)
        : setIsElementVisible(false);
    }, 100);

    //return useEffect early if animation has happened once already
    if (animation === true)
      return () => window.removeEventListener("scroll", handleScroll);
    //Otherwise begin handleScroll eventlistener. Start section opacity 0 for smooth transition
    if (isElementVisible === false)
      window.addEventListener("scroll", handleScroll);
    currentRef!.style.opacity = "0";
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animation, isElementVisible]);

  //Once element is visible in scroll, begin animation, return opacity to normal
  useEffect(() => {
    if (isElementVisible === true) {
      sectionRef.current!.style.animationName = "section";
      sectionRef.current!.style.opacity = "1";
      //This will ensure the handleScroll useEffect will return early.
      setAnimation(true);
    }
  }, [isElementVisible]);

  return (
    <section id={setId} className="section-container" ref={sectionRef}>
      <h2 className="section-title">{setTitle}</h2>
      {children}
    </section>
  );
};

export default Section;
