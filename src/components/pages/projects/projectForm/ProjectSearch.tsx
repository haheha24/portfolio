import "./projectform.css";
import { GoSearch } from "react-icons/go";
import React, { useState } from "react";
import ProjectStars from "./ProjectStars";
import ProjectTags from "./ProjectTags";

const ProjectSearch = () => {

  //set the handler
  const [inputState, setInput] = useState("");

  //Use React.ChangeEvent<HTMLInputElement> for a change event type
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  return (
    <div className="project-form-container">
      <form action="">
        <div className="project-search-container">
          <input
            type="text"
            id="project-search-form"
            name="filter"
            value={inputState}
            onChange={(e) => handleInput(e)}
          />
          <div className="search-icon-container">
            <GoSearch className="search-icon" />
          </div>
        </div>
        <div className="form-controls">
          <ProjectStars />
          <ProjectTags />
        </div>
      </form>
    </div>
  );
};

export default ProjectSearch;
