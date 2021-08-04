import "./projectform.css";
import { BsStar } from "react-icons/bs";
import { useContext } from "react";
import { ProjectContext } from "../../../../App";

const ProjectStars = () => {
  //Set useContext ProjectData from App
  const projectData = useContext(ProjectContext);

  return (
    <div className="filter-container">
      <p>Project Size</p>
      <div>
        <input type="checkbox" id="three-star" name="star" value="three-star" />
        <label htmlFor="three-star">
          <BsStar />
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="two-star" name="star" value="two-star" />
        <label htmlFor="two-star">
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="one-star" name="star" value="one-star" />
        <label htmlFor="one-star">
          <BsStar />
        </label>
      </div>
    </div>
  );
};

export default ProjectStars;
