import "./projectCard.css";
import { useRef } from "react";
import { GoMarkGithub } from "react-icons/go";

interface Card {
  url: string;
  github?: string;
  image: string;
  altTxt?: string;
  title?: string;
  description?: string;
}

const ProjectCard = ({
  url,
  github = undefined,
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
      <img
        src={
          image.length > 0
            ? image
            : `/images/work_in_progress.jpg`
        }
        alt={altTxt}
        className="project-card-img"
        ref={imgRef}
      />
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
