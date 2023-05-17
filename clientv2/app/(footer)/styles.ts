import styled from "styled-components";
import { StyledAnchor } from "../(styles)/globalStyledComponents";

//anchor - hyperlinks
const FooterLink = styled(StyledAnchor)`
  font-size: ${({ theme }) => theme.font.font16};
  text-decoration: underline;
`;

export { FooterLink };
