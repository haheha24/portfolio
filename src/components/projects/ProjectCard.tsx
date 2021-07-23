import React, { useRef } from "react";
import './ProjectCard.css'

interface Info {
  title: string;
  proName: string;
  desc: string;
  proLink: string;
}

const ProjectCard: React.FC<Info> = ({ title, proName, desc, proLink }) => {
  const cardInfo = useRef(desc);
  const startStr = cardInfo.current.split(proName).slice(0, 1);
  const endStr = cardInfo.current.split(proName).slice(-1);

  return (
    <div className="project-tile">
      <h3>{title}</h3>
      <p className="projectP">
        {startStr}
        <a href={proLink} target="_blank" className="projectLink">
          {proName}
        </a>
        {endStr}
      </p>
    </div>
  );
};

export default ProjectCard;
