import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GoMarkGithub } from "react-icons/go";
import { StyledImage } from "../../styledComponents";
import imgWorkInProgress from "../../images/work_in_progress.jpg";

interface Card {
  url: string;
  github?: string;
  image?: StaticImageData | string;
  altTxt?: string;
  title?: string;
  description?: string;
}

const ProjectCard = ({
  url,
  github = undefined,
  image = imgWorkInProgress,
  altTxt = "",
  title = "",
  description = "",
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

  const Img = motion(StyledImage);

  return (
    <figure className="project-card">
      <Img
        src={image}
        alt={altTxt}
        className="project-card-img"
        whileHover={{
          scale: 1.25,
          transition: { duration: 0.25 },
        }}
      />
      <figcaption className="project-card-caption">
        <h1 className="project-card-title">{title}</h1>
        <p className="project-card-desc">{description}</p>
        {url.length > 0 ? (
          <a
            href={url}
            className="project-card-link"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a
            href={github}
            className="project-card-link project-card-icon"
            target="_blank"
            rel="noreferrer"
          >
            <GoMarkGithub style={{ width: "1.5em", height: "1.33em" }} />
          </a>
        ) : (
          ""
        )}
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
