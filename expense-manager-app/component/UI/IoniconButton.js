import React from "react";
import { Platform } from "react-native";
import { Button, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const IoniconButton = (props) => {
  return (
    <Button transparent style={props.buttonStyle} onPress={props.onPress}>
      <Ionicons
        name={props.iconName}
        size={props.iconSize}
        color={props.iconColor}
      />
    </Button>
  );
};
export default IoniconButton;
