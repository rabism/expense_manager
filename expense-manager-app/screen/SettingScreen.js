import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
//import Icon from "react-native-vector-icons/FontAwesome";

const SettingScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Wellcome Settings Screen!</Text>
      <Button title="Submit" />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Settings",
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingScreen;
