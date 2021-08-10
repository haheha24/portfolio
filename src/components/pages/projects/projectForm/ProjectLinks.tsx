import "./projectform.css";

const ProjectLinks = () => {
  return (
    <div className="filter-container">
      <p>Project Links</p>
      <div>
        <input type="checkbox" id="repoLinks" name="links" value="repoLinks" />
        <label htmlFor="repoLinks">Repo Links</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="deployLinks"
          name="links"
          value="deployLinks"
        />
        <label htmlFor="deployLinks">Deploy Links</label>
      </div>
    </div>
  );
};

export default ProjectLinks;
