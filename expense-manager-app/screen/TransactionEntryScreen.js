import React from "react";
import { Button, Text, View, Container, Content, Icon } from "native-base";
import TransactionEntryForm from "../component/TransactionEntryForm";
const TransactionEntryScreen = React.forwardRef((props, ref) => {
  //const { user } = props.route;

  //console.info("transaction entry screen route " + user);
  console.info(props.route);

  //console.info("transaction entry screen route " + props.route);

  return (
    <Container>
      <Content>
        <View EntryForm>
          <TransactionEntryForm
            navigation={props.navigation}
            route={props.route}
          ></TransactionEntryForm>
        </View>
      </Content>
    </Container>
  );
});

export const screenOptions = (navData) => {
  return {
    headerTitle: "Transaction Entry",
  };
};

export default TransactionEntryScreen;
