import { useEffect, useRef, useReducer } from "react";
import { Route } from "react-router-dom";
import _ from "lodash/debounce";
import useMediaQuery from "../../utilities/hooks/useMediaQuery";
import "./main.css"
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import About from "./about/About";
import Section from "../reusable/Section";

//State reducer tracks
interface IAnimatedState {
  about: { animated: boolean; isVisible: boolean };
  projects: { animated: boolean; isVisible: boolean };
  contact: { animated: boolean; isVisible: boolean };
}

//Types of actions
enum sectionTypes {
  ABOUTLINK = "aboutLink",
  ABOUT_VISIBLE = "ABOUT_VISIBLE",
  ABOUT_NOT_VISIBLE = "ABOUT_NOT_VISIBLE",
  PROJECTSLINK = "projectsLink",
  PROJECTS_VISIBLE = "PROJECTS_VISIBLE",
  PROJECTS_NOT_VISIBLE = "PROJECTS_NOT_VISIBLE",
  CONTACTLINK = "contactLink",
  CONTACT_VISIBLE = "CONTACT_VISIBLE",
  CONTACT_NOT_VISIBLE = "CONTACT_NOT_VISIBLE",
}

//interface for actions
interface IElementActions {
  type: sectionTypes;
  ref: HTMLElement;
}

const Main = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const windowWidth = useMediaQuery();

  const initialState: IAnimatedState = {
    about: { animated: false, isVisible: false },
    projects: { animated: false, isVisible: false },
    contact: { animated: false, isVisible: false },
  };

  const animationReducer = (state: IAnimatedState, action: IElementActions) => {
    switch (action.type) {
      case "ABOUT_VISIBLE":
        if (windowWidth.width > 860) {
          state.about.isVisible = true;
          action.ref.style.animationName = "section";
          action.ref.style.opacity = "1";
          state.about.animated = true;
        } else if (windowWidth.width < 860) {
          state.about.isVisible = true;
          action.ref.style.opacity = "1";
          state.about.animated = true;
        }
        return state;
      case "ABOUT_NOT_VISIBLE":
        state.about.isVisible = false;
        return state;
      case "PROJECTS_VISIBLE":
        state.projects.isVisible = true;
        action.ref.style.animationName = "section";
        action.ref.style.opacity = "1";
        state.projects.animated = true;
        return state;
      case "PROJECTS_NOT_VISIBLE":
        state.projects.isVisible = false;
        return state;
      case "CONTACT_VISIBLE":
        state.contact.isVisible = true;
        action.ref.style.animationName = "section";
        action.ref.style.opacity = "1";
        state.contact.animated = true;
        return state;
      case "CONTACT_NOT_VISIBLE":
        state.contact.isVisible = false;
        return state;
      default:
        return state;
    }
  };
  const [animationState, dispatch] = useReducer(animationReducer, initialState);

  //handleScroll function to alter state
  useEffect(() => {
    // Switch case to handleScroll for each state/section
    const handleScroll = _(() => {
      if (aboutRef.current!.id === "aboutLink") {
        window.scrollY > aboutRef.current!.getBoundingClientRect().top
          ? dispatch({
              type: sectionTypes.ABOUT_VISIBLE,
              ref: aboutRef.current!,
            })
          : dispatch({
              type: sectionTypes.ABOUT_NOT_VISIBLE,
              ref: aboutRef.current!,
            });
      }
      if (projectsRef.current!.id === "projectsLink") {
        window.scrollY > projectsRef.current!.getBoundingClientRect().top
          ? dispatch({
              type: sectionTypes.PROJECTS_VISIBLE,
              ref: projectsRef.current!,
            })
          : dispatch({
              type: sectionTypes.PROJECTS_NOT_VISIBLE,
              ref: projectsRef.current!,
            });
      }
      if (contactRef.current!.id === "contactLink") {
        window.scrollY > contactRef.current!.getBoundingClientRect().top + 1700
          ? dispatch({
              type: sectionTypes.ABOUT_VISIBLE,
              ref: contactRef.current!,
            })
          : dispatch({
              type: sectionTypes.ABOUT_NOT_VISIBLE,
              ref: contactRef.current!,
            });
        return;
      }
    }, 100);
    if (window.scrollY === 0 && windowWidth.width < 860) {
      dispatch({
        type: sectionTypes.ABOUT_VISIBLE,
        ref: aboutRef.current!,
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationState, windowWidth]);

  return (
    <main id="container">
      <Route path="/">
        <Section
          setId="aboutLink"
          setTitle="About Me"
          sectionClass="section-container"
          headingClass="section-title"
          ref={aboutRef}
        >
          <About />
        </Section>
        <Section
          setId="projectsLink"
          setTitle="Projects"
          sectionClass="section-container"
          headingClass="section-title"
          ref={projectsRef}
        >
          <Projects />
        </Section>
        <Section
          setId="contactLink"
          setTitle="Contact Form"
          sectionClass="section-container"
          headingClass="section-title"
          ref={contactRef}
        >
          <Contact />
        </Section>
      </Route>
    </main>
  );
};

export default Main;
