import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, Octicons } from "@expo/vector-icons";
import TransactionEntryScreen from "../screen/TransactionEntryScreen";
import { screenOptions as transactionEntryScreenOption } from "../screen/TransactionEntryScreen";
import DashboardScreen from "../screen/DashboardScreen";
import { screenOptions as dashboardScreenOption } from "../screen/DashboardScreen";
import SearchTransactionHeads from "../screen/SearchTransactionHeads";
import { screenOptions as searchTransactionHeadsOption } from "../screen/SearchTransactionHeads";
import SettingScreen from "../screen/SettingScreen";
import { screenOptions as settingsScreenOption } from "../screen/SettingScreen";
import ReportScreen from "../screen/ReportScreen";
import { screenOptions as reportScreenOption } from "../screen/ReportScreen";
import CategoryScreen from "../screen/CategoryScreen";
import { screenOptions as categoryScreenOption } from "../screen/CategoryScreen";
import AppDrawerContent from "../component/UI/AppDrawerContent";
const defaultScreenSettings = () => {
  return {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#40005C" : "",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : "#40005C",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "montserrat-bold",
    },
    headerTitleAlign: "center",
  };
};

const RootNavigator = createStackNavigator();

export const RootNavigatorManager = () => {
  return (
    <RootNavigator.Navigator mode="modal" headerMode="none">
      <RootNavigator.Screen name="Root" component={DashboardNavigatorManager} />
      <RootNavigator.Screen
        name="SearchTransactionHeads"
        component={SearchTransactionHeads}
        options={searchTransactionHeadsOption}
      />
    </RootNavigator.Navigator>
  );
};

const DashboardNavigator = createStackNavigator();

export const DashboardNavigatorManager = () => {
  return (
    <DashboardNavigator.Navigator screenOptions={defaultScreenSettings}>
      <DashboardNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={dashboardScreenOption}
      />
      <DashboardNavigator.Screen
        name="TransactionEntry"
        component={TransactionEntryScreen}
        options={transactionEntryScreenOption}
      />
      <DashboardNavigator.Screen
        name="CategoryList"
        component={CategoryScreen}
        options={categoryScreenOption}
      />
    </DashboardNavigator.Navigator>
  );
};

const SettingsNavigator = createStackNavigator();

export const SettingsNavigatorManager = () => {
  return (
    <SettingsNavigator.Navigator screenOptions={defaultScreenSettings}>
      <SettingsNavigator.Screen
        name="Settings"
        component={SettingScreen}
        options={settingsScreenOption}
      />
    </SettingsNavigator.Navigator>
  );
};

const ReportNavigator = createStackNavigator();

export const ReportNavigatorManager = () => {
  return (
    <ReportNavigator.Navigator screenOptions={defaultScreenSettings}>
      <ReportNavigator.Screen
        name="Report"
        component={ReportScreen}
        options={reportScreenOption}
      />
    </ReportNavigator.Navigator>
  );
};

const HelpNavigator = createStackNavigator();

export const HelpNavigatorManager = () => {
  return (
    <HelpNavigator.Navigator screenOptions={defaultScreenSettings}>
      <HelpNavigator.Screen
        name="Report"
        component={ReportScreen}
        options={reportScreenOption}
      />
    </HelpNavigator.Navigator>
  );
};

const appDrawerContent = (props) => <AppDrawerContent {...props} />;

const DrawreNavigator = createDrawerNavigator();

export const DrawerNavigatorManager = () => {
  return (
    <DrawreNavigator.Navigator
      drawerContent={AppDrawerContent}
      drawerContentOptions={{
        activeTintColor: "#40005C",
      }}
    >
      <DrawreNavigator.Screen
        name="Dashboard"
        component={RootNavigatorManager}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-home" : "ios-home"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <DrawreNavigator.Screen
        name="Settings"
        component={SettingsNavigatorManager}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-settings" : "ios-settings"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <DrawreNavigator.Screen
        name="Report"
        component={ReportNavigatorManager}
        options={{
          drawerIcon: (props) => (
            <Octicons name="report" size={23} color={props.color} />
          ),
        }}
      />
      <DrawreNavigator.Screen
        name="Help"
        component={HelpNavigatorManager}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-help" : "ios-help"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </DrawreNavigator.Navigator>
  );
};
