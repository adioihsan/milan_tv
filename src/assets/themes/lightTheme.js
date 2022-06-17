import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#FE024E",
      light: "#EB507F",
    },
    secondary: {
      main: "#ffffff",
    },
    neutral: palette.augmentColor({
      color: {
        main: "#8C8989",
        light: "#fffafa",
        dark: "#ff0000",
      },
    }),
  },
});
export default lightTheme;
