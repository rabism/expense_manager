import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  ExpenseManagerNavigator,
  ManageDrawerNavigator,
} from "./ExpenseManagerNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ManageDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
