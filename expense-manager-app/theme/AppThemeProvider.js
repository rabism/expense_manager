import React from "react";
import { ThemeProvider } from "react-native-elements";

const theme = {
  Text: {
    style: {
      color: "red",
      fontFamily: "montserrat-regular",
    },
  },
};
const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppThemeProvider;
