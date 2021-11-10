import "./../projectform.css";
import { BsStar } from "react-icons/bs";
interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectStars: React.FC<Props> = ({ handleCheck }) => {
  return (
    <div id="filter-container">
      <p>Project Size</p>
      <div>
        <input type="checkbox" id="three-star" name="threeStar" value={3} onChange={(e) => handleCheck(e)}/>
        <label htmlFor="three-star">
          <BsStar />
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="two-star" name="twoStar" value={2} onChange={(e) => handleCheck(e)}/>
        <label htmlFor="two-star">
          <BsStar />
          <BsStar />
        </label>
      </div>
      <div>
        <input type="checkbox" id="one-star" name="oneStar" value={1} onChange={(e) => handleCheck(e)}/>
        <label htmlFor="one-star">
          <BsStar />
        </label>
      </div>
    </div>
  );
};

export default ProjectStars;
