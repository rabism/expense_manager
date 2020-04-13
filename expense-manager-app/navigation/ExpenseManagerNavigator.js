import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionEntryScreen from "../screen/TransactionEntryScreen";
import DashboardScreen from "../screen/DashboardScreen";

const ExpenseNavigator = createStackNavigator();

export const ExpenseManagerNavigator = () => {
  return (
    <ExpenseNavigator.Navigator>
      <ExpenseNavigator.Screen
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <ExpenseNavigator.Screen
        name="TransactionEntryScreen"
        component={TransactionEntryScreen}
      />
    </ExpenseNavigator.Navigator>
  );
};
