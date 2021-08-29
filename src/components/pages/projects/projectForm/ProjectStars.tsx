import "./projectform.css";
import { BsStar } from "react-icons/bs";
interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectStars: React.FC<Props> = ({ handleCheck }) => {
  return (
    <div id="filter-container">
      <p>Project Size</p>
      <div>
        <input type="checkbox" id="three-star" name="three-star" value="Three-star" onChange={(e) => handleCheck(e)}/>
        <label htmlFor="three-star">
          <BsStar />
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="two-star" name="two-star" value="Two-star" onChange={(e) => handleCheck(e)}/>
        <label htmlFor="two-star">
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="one-star" name="one-star" value="One-star" onChange={(e) => handleCheck(e)}/>
        <label htmlFor="one-star">
          <BsStar />
        </label>
      </div>
    </div>
  );
};

export default ProjectStars;
