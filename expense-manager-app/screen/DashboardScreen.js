import React, { useCallback } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { Button, Text } from "react-native-elements";
import AccountSnapshot from "../component/AccountSnapshot";
import CurrentTransaction from "../component/CurrentTransaction";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
//import { AppThemeProvider } from "../theme/AppThemeProvider";
//import Icon from "react-native-vector-icons/FontAwesome";

const DashboardScreen = (props) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#6a51ae");
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrolviewContainer}>
        <AccountSnapshot cashInHand="5000" />
        <CurrentTransaction />
      </ScrollView>
      <View style={styles.navButtonContainer}>
        <Button
          icon={<Ionicons name="md-add" size={50} color="green" />}
          type="clear"
          onPress={() => props.navigation.navigate("Transaction")}
          containerStyle={styles.navButton}
        />
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Expense",
    headerLeft: () => (
      <View>
        <Button
          icon={
            <Ionicons
              name={Platform.OS === "android" ? "md-menu" : "ios-menu"}
              size={30}
              color="#fff"
            />
          }
          type="clear"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </View>
    ),
    headerRight: () => (
      <View>
        <Button
          icon={
            <Ionicons
              name={Platform.OS === "android" ? "md-home" : "ios-home"}
              size={30}
              color="#fff"
            />
          }
          type="clear"
          onPress={() => navData.navigation.navigate("Dashboard")}
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolviewContainer: {
    padding: 10,
  },
  Text: {
    fontWeight: "bold",
  },
  navButtonContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 15,
    right: 30,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: "white",
    width: 60,
    height: 60,
  },
});

export default DashboardScreen;
