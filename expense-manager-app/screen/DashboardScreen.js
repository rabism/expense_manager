import React, { useCallback } from "react";
import { Platform, StatusBar } from "react-native";
import {
  Button,
  Text,
  View,
  Container,
  Content,
  connectStyle,
  Icon,
} from "native-base";
import AccountSnapshot from "../component/AccountSnapshot";
import CurrentTransaction from "../component/CurrentTransaction";
import { useFocusEffect } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import HeadrerLeft, { HeaderRight } from "../component/UI/Header";
import { Ionicons } from "@expo/vector-icons";
import { STYLE_NAME } from "../style/screen/DashboardScreen.style";
const DashboardScreen = React.forwardRef((props, ref) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#7600A1");
    }, [])
  );
  return (
    <Container>
      <Content>
        <AccountSnapshot cashInHand="5000" />
        <CurrentTransaction />
      </Content>
      <View plusbutton>
        <Button onPress={() => props.navigation.navigate("TransactionEntry")}>
          <Ionicons
            name="md-add"
            size={props.style.addIconSize}
            color={props.style.addIconColor}
          />
        </Button>
      </View>
    </Container>
  );
});

export const screenOptions = (navData) => {
  return {
    headerTitle: "Expense Manager",
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

export default connectStyle(STYLE_NAME, {})(DashboardScreen);
