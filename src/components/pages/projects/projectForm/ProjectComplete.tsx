import "./projectform.css";

const ProjectComplete = () => {
  return (
    <div className="filter-container">
      <p>Project Completion</p>
      <div>
        <input type="checkbox" id="completed" name="completed" value="completed" checked={true} />
        <label htmlFor="completed">
          Completed
        </label>
      </div>
      <div>
        <input type="checkbox" id="notCompleted" name="completed" value="notCompleted" />
        <label htmlFor="notCompleted">
          Not Completed
        </label>
      </div>
    </div>
  );
};

export default ProjectComplete;
