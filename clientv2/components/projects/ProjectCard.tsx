import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { GoMarkGithub } from "react-icons/go";
import Button from "components/Button";

interface Card {
  url: string;
  github?: string;
  image: string | StaticImageData;
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
    <figure className="relative rounded-3xl overflow-hidden bg-black-primary flex flex-col items-center justify-center m-auto w-full max-w-sm shadow-md duration-200 transition-all">
      <Image
        src={image}
        alt={altTxt}
        className="w-full h-[250px] aspect-4/3 duration-200 ease-in-out"
        ref={imgRef}
      />
      <figcaption
        className="flex flex-col justify-center font-semibold text-center space-y-5 bg-transparent-85 absolute w-full h-full opacity-0 hover:opacity-100 duration-500 ease-in-out"
        onMouseOver={() => {
          imgMouseOverHandler();
        }}
        onMouseOut={() => {
          imgMouseOutHandler();
        }}
      >
        <h3 className="py-[5px]">{title}</h3>
        <p className="ml-[5%]">{description}</p>
        {url.length > 0 ? (
          <a
            href={url}
            className="decoration-none bg-purple-secondary hover:bg-purple-primary p-3 rounded-3xl border-[2.5px] border-solid border-purple-primary w-1/2 mx-auto transition-all"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        ) : (
          ""
        )}
        {github ? (
          <Button
            as="a"
            href={github}
            className="decoration-none bg-purple-secondary hover:bg-purple-primary p-3 rounded-[50px] border-[2.5px] border-solid border-purple-primary mx-auto transition-all"
            target="_blank"
            rel="noreferrer"
          >
            <GoMarkGithub style={{ width: "1.5em", height: "1.33em" }} />
          </Button>
        ) : (
          ""
        )}
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
