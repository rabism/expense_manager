import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
//import Icon from "react-native-vector-icons/FontAwesome";

export default function DashboardScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Wellcome Dashboard!</Text>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate("TransactionEntryScreen")}
      />
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
