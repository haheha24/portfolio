import "./projectform.css";

interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectComplete: React.FC<Props> = ({ handleCheck }) => {
  return (
    <div id="filter-container">
      <p>Project Completion</p>
      <div>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value="completed"
          onChange={(e) => handleCheck(e)}
        />
        <label htmlFor="completed">Completed</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="notCompleted"
          name="notCompleted"
          value="not completed"
          onChange={(e) => handleCheck(e)}
        />
        <label htmlFor="notCompleted">Not Completed</label>
      </div>
    </div>
  );
};

export default ProjectComplete;
