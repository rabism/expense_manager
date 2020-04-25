import React from "react";
import { Button, Text, View, Container, Content, Icon } from "native-base";
import TransactionEntryForm from "../component/TransactionEntryForm";
const TransactionEntryScreen = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Content>
        <View EntryForm>
          <TransactionEntryForm
            navigation={props.navigation}
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
