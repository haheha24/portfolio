import "./projectform.css";
import { useContext } from "react";
import { ProjectContext } from "../../../../App";
interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectTags: React.FC<Props> = ({ handleCheck }) => {
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
    <div id="filter-container">
      <p>Technologies</p>
      <div className="filter-controls flex-direction-col tech">
        {tagData.map((data, index) => {
          return (
            <div key={index}>
              <input type="checkbox" id={data} name={data} value={data} onChange={(e) => handleCheck(e)}/>
              <label htmlFor={data}>{data}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTags;
