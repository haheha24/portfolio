import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.fontColor}};
  background-color: ${({ theme }) => theme.body}
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.fontColor}};
  background-color: ${({ theme }) => theme.body}
`;

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.fontColor}};
  background-color: ${({ theme }) => theme.body}
`;

export { StyledH1, StyledH2, StyledH3 };
