// ** MUI Imports
import { Theme } from "@mui/material/styles";

const GlobalStyling = (_theme: Theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto"
  },
  a: {
    display: "inline-block",
    textDecoration: "none"
  },

  "p:last-child": {
    marginBottom: 0
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: "none"
  },
  ".MuiContainer-root": {
    maxWidth: "1440px",
    padding: "0 10px",
    "@media (min-width: 1200px)": {
      maxWidth: "1440px"
    },
    "&.cus_container": {
      "@media (min-width: 1400px)": {
        maxWidth: "1470px"
      }
    }
  }

  // Additional styles here
});

export default GlobalStyling;
