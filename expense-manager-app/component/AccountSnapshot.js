import React from "react";
import { StyleSheet } from "react-native";
import { Text, Body, Card, CardItem, H1, H3 } from "native-base";
const AccountSnapshot = (props) => {
  return (
    <Card>
      <CardItem header style={styles.itmecontainer}>
        <H1>Wellcome Dashboard</H1>
      </CardItem>
      <CardItem style={styles.itmecontainer}>
        <H3>{props.cashInHand}</H3>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  itmecontainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
export default AccountSnapshot;
