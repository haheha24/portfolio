//assets
import "./projectform.css";
import { GoSearch } from "react-icons/go";
//react
import React, { useState, useContext, useEffect, useReducer } from "react";
//components
import ProjectStars from "./ProjectStars";
import ProjectTags from "./ProjectTags";
import ProjectComplete from "./ProjectComplete";
import ProjectLinks from "./ProjectLinks";
import ProjectCard from "../projectCards/ProjectCard";
//filter functions
import { filterFunction, searchFunction } from "./FilterFunctions";
//App import
import { ProjectContext } from "../../../../App";

const ProjectSearch = () => {
  //import useContext
  const projectData = useContext(ProjectContext);
  //set the handler
  const [inputState, setInput] = useState("");
  //set the checkbox state
  const [activeFilter, setActiveFilter] = useReducer(
    (
      initCheck: { [index: string]: boolean },
      updatedCheckState: { [index: string]: boolean }
    ) => ({
      ...initCheck,
      ...updatedCheckState,
    }),
    {}
  );
  //sets the card filterand passes the state into ProjectCard as a prop
  const [cardFilter, setCardFilter] = useState(searchFunction("", []));

  //on render
  useEffect(() => {
    setCardFilter(projectData);
  }, [projectData]);

  //Use React.ChangeEvent<HTMLInputElement> for a change event type
  //Input Handler for search bar
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  //handle the checkboxes and push to checkState
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.currentTarget;

    setActiveFilter({ [name]: checked });
  };

  //Submit search query for project form - uses FilterFunctions
  const submitInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const checkBoxList = Object.keys(activeFilter).filter((filter) => {
      return activeFilter[filter] === true;
    });
    if (checkBoxList.length > 0) {
      setCardFilter(filterFunction(inputState, projectData, checkBoxList));
    } else {
      setCardFilter(searchFunction(inputState, projectData));
    }
  };

  //resets the checkboxes
  const reset = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    document
      .querySelectorAll('input[type="checkbox"]')
      //@ts-ignore
      .forEach((el) => (el.checked = false));
    console.log(activeFilter);
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
        <div
          id="form-controls"
          className="flex-direction-col align-items-center"
        >
          <input
            type="button"
            id="all-projects"
            name="projects"
            value="Clear"
            onClick={(e) => reset(e)}
          />
        </div>
        <div id="form-controls">
          <ProjectComplete handleCheck={handleCheck} />
          <ProjectStars handleCheck={handleCheck} />
          <ProjectLinks handleCheck={handleCheck} />
          <ProjectTags handleCheck={handleCheck} />
        </div>
      </form>
      <ProjectCard cardArray={cardFilter} />
    </div>
  );
};

export default ProjectSearch;
