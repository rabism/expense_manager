import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
//import Icon from "react-native-vector-icons/FontAwesome";

const TransactionEntryScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Wellcome Transaction Entry!</Text>
      <Button title="Submit" />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Transaction Entry",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TransactionEntryScreen;
