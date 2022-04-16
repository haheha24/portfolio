import "./projectCard.css";
import { useRef } from "react";

interface Card {
  url: string;
  image: string;
  altTxt?: string;
  title?: string;
  description?: string;
}

const ProjectCard = ({
  url,
  image,
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

  return (
    <figure className="project-card">
      <img src={image} alt={altTxt} className="project-card-img" ref={imgRef} />
      <figcaption
        className="project-card-caption"
        onMouseOver={() => {
          imgMouseOverHandler();
        }}
        onMouseOut={() => {
          imgMouseOutHandler();
        }}
      >
        <h1 className="project-card-title">{title}</h1>
        <p className="project-card-desc">{description}</p>
        <a
          href={url}
          className="project-card-link"
          target="_blank"
          rel="noreferrer"
        >
          Visit website
        </a>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
