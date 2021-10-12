import "./projectform.css";
import { useContext } from "react";
import { ProjectContext } from "../../../../App";
interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectTags: React.FC<Props> = ({ handleCheck }) => {
  //Set useContext ProjectData from App
  const projectData = useContext(ProjectContext);

  const lowerCaseFirstLetter = (string: string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  // create a filter that will remove all the nested tags repeated values
  const tagData = projectData
    .flatMap((data) => {
      return data.tags;
    })
    .filter((tags, index, oldArr) => {
      return oldArr.indexOf(tags) === index;
    })
    .map((tag) => {
      //this is for filter function so that the tags match for the conditionals and the form text.
      let nameTag = lowerCaseFirstLetter(tag).replace(/\W/g, "");
      if (nameTag === "HTML" || "CSS") {
        return { value: tag, name: nameTag.toLowerCase() };
      } else {
        return { value: tag, name: nameTag };
      }
    });

  return (
    <div id="filter-container">
      <p>Technologies</p>
      <div className="filter-controls flex-direction-col tech">
        {tagData.map((data, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                id={data.name}
                name={data.name}
                value={data.value}
                onChange={(e) => handleCheck(e)}
              />
              <label htmlFor={data.name}>{data.value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTags;
