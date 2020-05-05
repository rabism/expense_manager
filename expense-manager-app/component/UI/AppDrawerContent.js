import React from "react";
import { Platform, SafeAreaView, View, StyleSheet, Text } from "react-native";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
const AppDrawerContent = (props) => {
  const drawerLabelProp = { labelStyle: styles.drawerLabelStyle };
  const allDrawerProps = { ...props, ...drawerLabelProp };
  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <View style={styles.drawerHeaderContainer}>
          <View style={styles.drawerHeaderTextContainer}>
            <Text h4 style={styles.drawerHeaderText}>
              Rabi Mandal
            </Text>
          </View>
        </View>
        <DrawerItemList {...allDrawerProps} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    height: 120,
    backgroundColor: "#40005C",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  drawerHeaderTextContainer: {
    alignItems: "center",
    padding: 10,
  },
  drawerHeaderText: {
    color: Platform.OS === "android" ? "#fff" : "#f4511e",
    fontFamily: "montserrat-bold",
  },
  drawerHeaderAvtar: {},
  drawerLabelStyle: {
    fontFamily: "montserrat-bold",
  },
});

export default AppDrawerContent;
