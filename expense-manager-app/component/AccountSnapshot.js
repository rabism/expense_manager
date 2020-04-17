import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
const AccountSnapshot = (props) => {
  return (
    <View style={styles.container}>
      <Text h4>Wellcome Dashboard</Text>
      <Text h5>{props.cashInHand}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
  },
});
export default AccountSnapshot;
