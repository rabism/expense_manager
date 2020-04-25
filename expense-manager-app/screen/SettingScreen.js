import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Settings from "../component/Settings";
import HeadrerLeft, { HeaderRight } from "../component/UI/Header";
import {
  Container,
  Header,
  Content,
  Button,
  H3,
  connectStyle,
  View,
  ListItem,
  CheckBox,
  Text,
  Body,
} from "native-base";
import { STYLE_NAME } from "../style/screen/SettingScreen.style";
const SettingScreen = React.forwardRef((props, ref) => {
  const styles = props.style;
  console.log(styles);
  return (
    <Container>
      <ListItem>
        <CheckBox checked={true} />
        <Body>
          <Text>Daily Stand Up</Text>
        </Body>
      </ListItem>

      <Text boldtext>Your Component with static style</Text>
      <Button customStyleProp>
        <Text>Custom Button</Text>
      </Button>
      <View>
        <Text>View1</Text>
      </View>
      <View topp>
        <Text>View2</Text>
      </View>
    </Container>
  );
});

export const screenOptions = (navData) => {
  return {
    headerTitle: "Setting",
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

export default connectStyle(STYLE_NAME, {})(SettingScreen);
