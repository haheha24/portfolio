import styled from "styled-components";

const StyledAnchor = styled.a`
  font-size: ${(props) => props.theme.font.font24};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.anchor.backgroundColor};

  &:active {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }
`;

export { StyledAnchor };
