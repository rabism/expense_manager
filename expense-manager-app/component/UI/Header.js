import React from "react";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import IoniconButton from "./IoniconButton";
export default HeaderLeft = (props) => {
  return (
    <View style={styles.containerLeft}>
      <IoniconButton
        buttonStyle={styles.leftButton}
        onPress={props.onPress}
        iconName={props.iconName}
        iconSize={30}
        iconColor="white"
      />
    </View>
  );
};

export const HeaderRight = (props) => {
  return (
    <View style={styles.containerRight}>
      <IoniconButton
        buttonStyle={styles.rightButton}
        onPress={props.onPress}
        iconName={props.iconName}
        iconSize={30}
        iconColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLeft: {
    paddingLeft: 15,
  },
  leftButton: {},
  rightButton: {},
  containerRight: {
    paddingRight: 15,
  },
});
