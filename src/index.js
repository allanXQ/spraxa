import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    bodytext: {
      fontSize: "1rem",
      color: "#616161",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    boldbodytext: {
      fontSize: "1rem",
      color: "#616161",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
    heroHeading: {
      fontSize: "3.125rem",
      lineHeight: "4.688",
    },

    sectionheading: {
      fontSize: "2.25rem",
      lineHeight: "3.375rem",
    },
    cardtitle: {},
    cardsubtitle: {
      fontSize: "1.2rem",
      color: "#616161",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
  },
  palette: {
    primary: {
      main: "#50d8af",
      darkgreen: "#2c9877",
      darkblue: "#020d26", //"#0c2e8a",
    },
    secondary: {
      main: "#353535",
      other: "#343c5c",
      icon: "#666666",
    },
    wfo: {
      main: "#01b5ff",
    },
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
