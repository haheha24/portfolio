//assets
import "./projectform.css";
import { GoSearch } from "react-icons/go";
//react
import React, { useState, useContext } from "react";
//components
import ProjectStars from "./ProjectStars";
import ProjectTags from "./ProjectTags";
import ProjectComplete from "./ProjectComplete";
import ProjectLinks from "./ProjectLinks";
import ProjectCard from "../projectCards/ProjectCard";
//filter functions
import { searchFunction } from "./FilterFunctions";
//App import
import { ProjectContext } from "../../../../App";

const ProjectSearch = () => {
  //import useContext
  const projectData = useContext(ProjectContext);
  const projectArray = [...projectData];
  //set the handler
  const [inputState, setInput] = useState("");
  const [cardFilter, setCardFilter] = useState(searchFunction("", []));
  //set useReducer so that it will track the checked return boolean of each checkbox in each component

  //Use React.ChangeEvent<HTMLInputElement> for a change event type
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  const submitInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCardFilter(searchFunction(inputState, projectArray));
  };

  const reset = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    document
      .querySelectorAll('input[type="checkbox"]')
      //@ts-ignore
      .forEach((el) => (el.checked = false));
      console.log("click")
  };

  return (
    <div className="project-form-container">
      <form action="" onSubmit={(sInput) => submitInput(sInput)}>
        <div className="project-search-container">
          <input
            type="text"
            id="project-search-form"
            name="filter"
            value={inputState}
            onChange={(e) => handleInput(e)}
            placeholder="hit enter or click the search icon to load ALL the projects"
          />
          <button className="search-icon-container">
            <GoSearch className="search-icon" />
          </button>
        </div>
        <div className="form-controls flex-direction-col align-items-center">
          <input
            type="button"
            id="all-projects"
            name="projects"
            value="Clear"
            onClick={(e) => reset(e)}
          />
        </div>
        <div className="form-controls">
          <ProjectComplete />
          <ProjectStars />
          <ProjectLinks />
          <ProjectTags />
        </div>
      </form>
      <ProjectCard cardArray={cardFilter} />
    </div>
  );
};

export default ProjectSearch;
