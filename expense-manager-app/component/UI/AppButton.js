import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const AppButton = (props) => {
  let Button;
  switch (props.buttonType) {
    case "ionicon":
      Button = (
        <Ionicons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      );
      break;
    case "materialicon":
      Button = (
        <MaterialIcons
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      );
      break;
    // code block
  }

  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
      {Button}
    </TouchableOpacity>
  );
};
export default AppButton;
