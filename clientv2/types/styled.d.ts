// import original module declarations
import "styled-components";
import { ThemeType } from "../styles/Theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: ThemeType;
  }
}
