//assets
import "./projectform.css";
import { GoSearch } from "react-icons/go";
//react
import React, { useState } from "react";
//components
import ProjectStars from "./projectFormComponents/ProjectStars";
import ProjectTags from "./projectFormComponents/ProjectTags";
import ProjectComplete from "./projectFormComponents/ProjectComplete";
import ProjectLinks from "./projectFormComponents/ProjectLinks";
import ProjectCard from "../projectCards/ProjectCard";
//filter functions
import FilteredProjects from "./projectFormComponents/FilterFunctions";
//App import
import {projectData, Project} from "../ProjectsArray";

interface IactiveFilter {
  [index: string]: boolean;
}

const ProjectSearch = () => {
  //set the handler
  const [inputState, setInput] = useState("");
  //set the checkbox state - useState allows me to spread new data at a specific time,
  //rather than using my reducer to always spread in useReducer
  const [activeFilter, setActiveFilter] = useState<IactiveFilter>({
    completed: false,
    notCompleted: false,
    threeStar: false,
    twoStar: false,
    oneStar: false,
    repoLink: false,
    deployLink: false,
    html: false,
    css: false,
    javaScript: false,
    react: false,
    nodeJS: false,
    expressJS: false,
    mongooseJS: false,
    mongoDBAtlas: false,
  });
  /* const [activeFilter, setActiveFilter] = useReducer(
    (initCheck: IactiveFilter, updatedCheckState: IactiveFilter) => ({
      ...initCheck,
      ...updatedCheckState,
    }),
    {}
  ); */
  //sets this state with filteredprojects, using projectData as initial value and passes the state into ProjectCard as a prop
  const [cardFilter, setCardFilter] = useState<Project[]>(projectData);

  //Use React.ChangeEvent<HTMLInputElement> for a change event type
  //Input Handler for search bar
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  //handle the checkboxes and push to checkState
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.currentTarget;
    setActiveFilter((prev: IactiveFilter) => ({ ...prev, [name]: checked }));
  };

  //Submit search query for project form - uses FilterFunctions
  const submitInput = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let checkBoxList = Object.keys(activeFilter)
      .map((box) => {
        return { checkBox: box, checked: activeFilter[box] };
      })
      .filter((checkBoxTrue) => {
        return checkBoxTrue.checked === true;
      });

    if (checkBoxList.length > 0) {
      setCardFilter(FilteredProjects(inputState, projectData, checkBoxList));
    } else {
      setCardFilter(FilteredProjects(inputState, projectData));
    }
  };

  //resets the checkboxes
  const reset = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    setActiveFilter({});
    let allCheckBoxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[type="checkbox"]'
    );
    Array.from(allCheckBoxes).forEach((el) => (el.checked = false));
    setCardFilter(projectData)
    console.log("The form has been cleared")
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
            placeholder="search projects"
          />
          <button className="search-icon-container">
            <GoSearch className="search-icon" />
          </button>
        </div>
        <div
          className="flex-direction-col text-align-center"
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
          <ProjectTags handleCheck={handleCheck} projectData={projectData} />
        </div>
      </form>
      <ProjectCard cardArray={cardFilter} />
    </div>
  );
};

export default ProjectSearch;
