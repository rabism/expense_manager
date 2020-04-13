import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
//import Icon from "react-native-vector-icons/FontAwesome";

export default function TransactionEntryScreen() {
  return (
    <View style={styles.container}>
      <Text>Wellcome Transaction Entry!</Text>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
