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
import { Constants, FileSystem, Asset, SQLite } from "expo";
import { init } from "./helpers/db";
const App = (props) => {
  let [fontsLoaded] = useFonts({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  //console.log("Befor db initialization");
  const replaceInitialDb = false;
  init(replaceInitialDb)
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

/*
{
const init = async () => {
  const dbName = "expensemanager.db";
  const { uri1 } = await FileSystem.getInfoAsync(
    `${FileSystem.documentDirectory}SQLite/${dbName}`
  );

  console.log(uri1);

  const { uri } = await FileSystem.getInfoAsync(
    `${FileSystem.documentDirectory}SQLite/${"test.db"}`
  );

  console.log(uri);

  const sqliteDirectory = `${FileSystem.documentDirectory}SQLite`;

  // First, ensure that the SQLite directory is indeed a directory
  // For that we will first get information about the filesystem node
  // and handle non-existent scenario.
  const { exists, isDirectory } = await FileSystem.getInfoAsync(
    sqliteDirectory
  );
  if (!exists) {
    await FileSystem.makeDirectoryAsync(sqliteDirectory);
  } else if (!isDirectory) {
    throw new Error("SQLite dir is not a directory");
  }

  const pathToDownloadTo = `${sqliteDirectory}/${dbName}`;
  const uriToDownload = Asset.fromModule(
    require("./assets/expensemanager.sqllite")
  ).uri;
  console.log(`Will download ${uriToDownload} to ${pathToDownloadTo}`);

  // Let's download the file! We could have used something like
  // https://github.com/expo/native-component-list/blob/3f03acb7e11a1b0cc0c33036743465aaae5c2cf1/screens/FileSystemScreen.js#L27-L44
  // i. e. some progress indicator, but hey, that's just a demo!
  await FileSystem.downloadAsync(uriToDownload, pathToDownloadTo);
  // this.db = SQLite.openDatabase("test.sqlite");
  // Once we've opened the database and saved the instance to `this`, we can enable the open button.
};
}
*/
