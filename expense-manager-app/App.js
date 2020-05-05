import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import appReducer from "./store/expense-manager-reducer";
import { init } from "./helpers/db";
const App = (props) => {
  let [fontsLoaded] = useFonts({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  //console.log("Befor db initialization");
  init()
    .then(() => {
      console.log("Initialized database");
    })
    .catch((err) => {
      console.log("Initializing db failed.");
      console.log(err);
    });

  const rootReducer = combineReducers({
    appState: appReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </StyleProvider>
    );
  }
};

export default App;
