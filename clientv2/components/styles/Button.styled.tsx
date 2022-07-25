import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${(props) => props.theme.fontSize};
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.button.backgroundColor};
  cursor: pointer;

  $:hover {
    background-color: ${(props) => props.theme.button.backgroundColorHover};
  }
`;

export { StyledButton };
