import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    brand: {
      primary   : "#A02321",
      secondary : "#A58C63",
    },
    primary: {
      main : "#1976d2",
      dark : "#292929",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f6f8",
    },
    text: {
      primary   : "#333",
      secondary : "#666",
    },
  },
/*   typography: {
    fontFamily : "Roboto, sans-serif",
    h1         : {
      fontSize   : "2.5rem",
      fontWeight : 500,
      lineHeight : 1.2,
    },
    h2: {
      fontSize   : "2rem",
      fontWeight : 400,
      lineHeight : 1.2,
    },
    h3: {
      fontSize   : "1.75rem",
      fontWeight : 400,
      lineHeight : 1.2,
    },
    h4: {
      fontSize   : "1.5rem",
      fontWeight : 400,
      lineHeight : 1.2,
    },
  }, */
});

export default theme;
