import { createMuiTheme } from "@material-ui/core/styles";

export const materialUiAppBarHeight = "48px";

// Create a theme instance.
const darkTheme = createMuiTheme({
  typography: {
    // fontFamily: "Atlas Grotesk Web, sans-serif",
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

export default darkTheme;
