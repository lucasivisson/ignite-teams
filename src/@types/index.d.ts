import theme from "../theme";

// import original module declarations
import "styled-components/native";

// and extend them!
declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
