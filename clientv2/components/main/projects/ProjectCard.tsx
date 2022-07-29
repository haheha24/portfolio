import { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { GoMarkGithub } from "react-icons/go";
import {
  ProjectCardFigure,
  ProjectCardImage,
  ProjectCardCaption,
  ProjectCardTitle,
  ProjectCardText,
  ProjectCardLink,
} from "./projectsStyledComponents";
import imgWorkInProgress from "../../images/work_in_progress.jpg";

interface Card {
  url?: string;
  github?: string;
  image?: StaticImageData | string;
  altTxt?: string;
  title?: string;
  description?: string;
}

const ProjectCardImg = motion(ProjectCardImage);
const ProjectCardCaptionMotion = motion(ProjectCardCaption);

const ProjectCard = ({
  url,
  github,
  image = "/images/work_in_progress.jpg" || imgWorkInProgress,
  altTxt = "This project is under construction",
  title,
  description,
}: Card) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const imgMouseOverHandler = () => {
    const img = imgRef.current!;
    img.style.transform = "scale(1.25)";
  };
  const imgMouseOutHandler = () => {
    const img = imgRef.current!;
    img.style.transform = "scale(1)";
  };

  return (
    <ProjectCardFigure>
      <ProjectCardImg src={image} alt={altTxt} ref={imgRef} />
      <ProjectCardCaptionMotion
        whileHover={{ opacity: 1, transition: { duration: 0.1 } }}
        onMouseOver={imgMouseOverHandler}
        onMouseOut={imgMouseOutHandler}
      >
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <ProjectCardText>{description}</ProjectCardText>
        {url && (
          <ProjectCardLink href={url} target="_blank" rel="noreferrer">
            Visit Website
          </ProjectCardLink>
        )}
        {github && (
          <ProjectCardLink href={github} target="_blank" rel="noreferrer">
            <GoMarkGithub style={{ width: "1.5em", height: "1.33em" }} />
          </ProjectCardLink>
        )}
      </ProjectCardCaptionMotion>
    </ProjectCardFigure>
  );
};

export default ProjectCard;
