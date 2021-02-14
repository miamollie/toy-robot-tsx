import { createMuiTheme } from "@material-ui/core/styles";

// export const materialUiAppBarHeight = "48px";

// Create a theme instance.
const lightTheme = createMuiTheme({
  typography: {
    // fontFamily: "Atlas Grotesk Web, sans-serif",
  },
  palette: {
    primary: {
      // light: string,
      main: "#82bec3",
      dark: "#408e99",
    },
    secondary: {
      // light: string,
      main: "#f0d2d0",
      dark: "#727472",
    },
    error: {
      main: "#a01919",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1920,
    },
  },
});

export default lightTheme;

// teal: #82bec3
// pink : #f0d2d0
// dark teal: #408e99
// dark grey: #727472
// light grey
