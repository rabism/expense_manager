import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ExpenseManagerNavigator } from "./ExpenseManagerNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ExpenseManagerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
