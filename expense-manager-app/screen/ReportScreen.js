import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeadrerLeft, { HeaderRight } from "../component/UI/Header";
const ReportScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Wellcome Report Screen!</Text>
      <Button title="Submit" />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Report",
    headerLeft: () => (
      <HeadrerLeft
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    ),
    headerRight: () => (
      <HeaderRight
        iconName={Platform.OS === "android" ? "md-home" : "ios-home"}
        onPress={() =>
          navData.navigation.navigate("Root", { screen: "Dashboard" })
        }
      />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReportScreen;
