const Technical = () => {
  const divContainer =
    "m-5 p-5 shadow-2xl rounded-2xl rounded-tr-none bg-purple-secondary";
  const subheading =
    "font-bold underline decoration-solid underline-offset-1 text-dynamic-xl";
  return (
    <p
      key="skills"
      className="flex flex-col md:flex-row justify-evenly animate-spring transition-transform"
    >
      <div className={divContainer}>
        <h4 className={subheading}>Technical Proficiencies</h4>
        <ul>
          <li>Microsoft Office Suite (Project and Teams)</li>
          <li>Strong critical thinking and attention to detail</li>
          <li>Excellent communication skills</li>
          <li>Team leadership and collaboration</li>
          <li>Customer Service experience</li>
        </ul>
      </div>
      <div className={divContainer}>
        <h4 className={subheading}>Other Skills</h4>
        <ul>
          <li>Agile and Scrum Methodologies</li>
          <li>Debugging</li>
          <li>Version Control</li>
        </ul>
      </div>
    </p>
  );
};

export default Technical;
