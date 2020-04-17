import React from "react";
import { Platform, SafeAreaView, Button, View, Linking } from "react-native";
import { Text } from "react-native-elements";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons, Octicons } from "@expo/vector-icons";
import TransactionEntryScreen from "../screen/TransactionEntryScreen";
import { screenOptions as transactionEntryScreenOption } from "../screen/TransactionEntryScreen";
import DashboardScreen from "../screen/DashboardScreen";
import { screenOptions as dashboardScreenOption } from "../screen/DashboardScreen";
import SettingScreen from "../screen/SettingScreen";
import { screenOptions as settingsScreenOption } from "../screen/SettingScreen";
import ReportScreen from "../screen/ReportScreen";
import { screenOptions as reportScreenOption } from "../screen/ReportScreen";
import AppDrawerContent from "../component/UI/AppDrawerContent";
const defaultScreenSettings = () => {
  return {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#f4511e" : "",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : "#f4511e",
    headerTitleStyle: {
      fontWeight: "bold",
      fontFamily: "montserrat-bold",
    },
    headerTitleAlign: "center",
  };
};

const DashboardNavigator = createStackNavigator();

export const ManageDashboardNavigator = () => {
  return (
    <DashboardNavigator.Navigator screenOptions={defaultScreenSettings}>
      <DashboardNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={dashboardScreenOption}
      />
      <DashboardNavigator.Screen
        name="Transaction"
        component={TransactionEntryScreen}
        options={transactionEntryScreenOption}
      />
    </DashboardNavigator.Navigator>
  );
};

const SettingsNavigator = createStackNavigator();

export const ManageSettingsNavigator = () => {
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

export const ManageReportNavigator = () => {
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

export const ManageHelpNavigator = () => {
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

export const ManageDrawerNavigator = () => {
  return (
    <DrawreNavigator.Navigator
      drawerContent={AppDrawerContent}
      drawerContentOptions={{
        activeTintColor: "#f4511e",
      }}
    >
      <DrawreNavigator.Screen
        name="Dashboard"
        component={ManageDashboardNavigator}
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
        component={ManageSettingsNavigator}
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
        component={ManageReportNavigator}
        options={{
          drawerIcon: (props) => (
            <Octicons name="report" size={23} color={props.color} />
          ),
        }}
      />
      <DrawreNavigator.Screen
        name="Help"
        component={ManageHelpNavigator}
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
