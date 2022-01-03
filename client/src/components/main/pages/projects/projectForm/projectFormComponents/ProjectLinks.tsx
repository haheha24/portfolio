import "../projectform.css";
interface Props {
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectLinks: React.FC<Props> = ({ handleCheck }) => {
  return (
    <div id="filter-container">
      <p>Project Links</p>
      <div>
        <input type="checkbox" id="repoLinks" name="repoLink" value="Repo link" onChange={(e) => handleCheck(e)} />
        <label htmlFor="repoLinks">Repo Links</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="deployLinks"
          name="deployLink"
          value="Deploy link"
          onChange={(e) => handleCheck(e)}
        />
        <label htmlFor="deployLinks">Deploy Links</label>
      </div>
    </div>
  );
};

export default ProjectLinks;
