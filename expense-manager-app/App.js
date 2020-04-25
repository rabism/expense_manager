import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";
const App = (props) => {
  let [fontsLoaded] = useFonts({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyleProvider style={getTheme(material)}>
        <AppNavigator />
      </StyleProvider>
    );
  }
};

export default App;
