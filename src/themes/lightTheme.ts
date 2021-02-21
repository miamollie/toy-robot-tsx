import { createMuiTheme } from "@material-ui/core/styles";

// export const materialUiAppBarHeight = "48px";

// Create a theme instance.
const lightTheme = createMuiTheme({
  typography: {
    // fontFamily: "Atlas Grotesk Web, sans-serif",
  },
  palette: {
    primary: {
      light: "#E1DFE1",
      main: "#82bec3",
      dark: "#408e99",
    },
    secondary: {
      light: "#727472",
      main: "#f0d2d0",
      dark: "#cc9894",
    },
    error: {
      main: "#813745",
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
// dark teal: #408e99
// pink : #f0d2d0
// dark grey: #727472
// light grey: #E1DFE1
// dark pink: #cc9894
