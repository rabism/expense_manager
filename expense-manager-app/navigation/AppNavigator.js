import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigatorManager } from "./ExpenseManagerNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <DrawerNavigatorManager />
    </NavigationContainer>
  );
};

export default AppNavigator;
