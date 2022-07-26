import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

const StyledImage = (img: string | StaticImageData): JSX.Element => {
  const StyledImg = styled(Image)`
    width: 100%;
    height: 100%;
  `;
  return <StyledImg src={img} />;
};

export { StyledImage };
