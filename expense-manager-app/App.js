import React from "react";
import AppNavigator from "./navigation/AppNavigator";
//import { ThemeProvider } from "react-native-elements";
import AppThemeProvider from "./theme/AppThemeProvider";
//import Icon from "react-native-vector-icons/FontAwesome";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

const App = (props) => {
  let [fontsLoaded] = useFonts({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppThemeProvider>
        <AppNavigator />
      </AppThemeProvider>
    );
  }
};

export default App;
