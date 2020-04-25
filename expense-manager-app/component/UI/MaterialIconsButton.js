import React from "react";
import { Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
const MaterialIconsButton = (props) => {
  return (
    <Button transparent style={props.buttonStyle} onPress={props.onPress}>
      <MaterialIcons
        name={props.iconName}
        size={props.iconSize}
        color={props.iconColor}
      />
    </Button>
  );
};
export default MaterialIconsButton;
