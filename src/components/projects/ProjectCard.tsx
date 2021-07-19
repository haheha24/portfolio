import "./projectCard.css";
import React from "react";

interface Info {
  title: string;
  desc: string;
  proLink: string;
  cpenLink: string;
}

interface Word {
  keyWord: string;
}

const ProjectCard: React.FC<Info> = ({ title, desc, proLink, cpenLink }) => {
  const createWords = (paragraph: Word) => {
    const findWord = JSON.stringify(paragraph);
    console.log(findWord);
  };
  /* const cardInfo = createWords(desc); */
  return (
    <div className="project-tile">
      <h3>{title}</h3>
      {/* {createWords(desc)} */}
    </div>
  );
};

export default ProjectCard;
