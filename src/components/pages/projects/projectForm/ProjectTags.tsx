import "./projectform.css";
import { useContext } from "react";
import { ProjectContext } from "../../../../App";

const ProjectTags = () => {
  //Set useContext ProjectData from App
  const projectData = useContext(ProjectContext);

  // create a filter that will remove all the nested tags repeated values
  const tagData = projectData
    .flatMap((data) => {
      return data.tags;
    })
    .filter((tags, index, oldArr) => {
      return oldArr.indexOf(tags) === index;
    });

  return (
    <div className="filter-container">
      <p>Technologies</p>
      <div className="form-controls flex-direction-col">
        {tagData.map((data, index) => {
          return (
            <div key={index}>
              <input type="checkbox" id={data} name="star" value={data} />
              <label htmlFor={data}>{data}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTags;
