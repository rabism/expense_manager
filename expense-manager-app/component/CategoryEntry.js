import React, { useState } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import {
  Text,
  View,
  Form,
  Item,
  Input,
  Label,
  CheckBox,
  Badge,
} from "native-base";
import MaterialTheme from "../native-base-theme/variables/material";
//import AppButton from "../component/UI/AppButton";
import CategoryIconData from "../assets/icons";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "./UI/AppButton";
const CategoryEntry = (props) => {
  const [selectedIcon, setSelectedIcon] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppButton
          onPress={() => props.hideModal()}
          iconName={Platform.OS === "android" ? "md-close" : "ios-close"}
          iconSize={30}
          iconColor={MaterialTheme.brandPrimary}
          buttonType="ionicon"
        />
        <AppButton
          onPress={() => console.log("save button press")}
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          iconSize={30}
          iconColor={MaterialTheme.brandPrimary}
          buttonType="ionicon"
          buttonStyle={{ marginRight: 20 }}
        />
      </View>
      <Form>
        <Item stackedLabel style={{ alignItems: "stretch" }}>
          <Label style={styles.label}>Category Name</Label>
          <Input />
        </Item>
        <Item stackedLabel style={{ alignItems: "stretch" }}>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              checked={false}
              style={styles.checkbox}
              // onPress={checkBoxHandler.bind(this, "Income", incomeType)}
            />
            <Text> Is parent category </Text>
          </View>
        </Item>
        <Item
          stackedLabel
          style={{ alignItems: "stretch", borderBottomWidth: null }}
        >
          <Label style={styles.label}>Select a icon from below </Label>
          <View style={styles.containerIcon}>
            {CategoryIconData.map((item) => {
              return (
                <AppButton
                  key={item.id}
                  iconName={item.android}
                  iconSize={30}
                  iconColor={
                    selectedIcon === item.id
                      ? MaterialTheme.selectedTextColor
                      : MaterialTheme.brandPrimary
                  }
                  buttonType="ionicon"
                  buttonStyle={{
                    ...styles.iconButton,
                    backgroundColor:
                      selectedIcon === item.id
                        ? MaterialTheme.brandPrimary
                        : null,
                  }}
                  onPress={() => setSelectedIcon(item.id)}
                />
              );
            })}
          </View>
        </Item>
      </Form>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row-reverse",
  },
  checkBoxContainer: {
    //flexDirection: "row",
    //alignItems: "center",
    // backgroundColor: "pink",
    //justifyContent: "flex-start",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
    alignItems: "center",
  },
  label: {
    fontSize: MaterialTheme.formLabelFontSize,
    fontWeight: "bold",
  },
  checkbox: {
    left: 0,
  },
  checkboxText: {
    marginLeft: 5,
    //left: 0,
  },
  containerIcon: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    marginTop: 15,
    //backgroundColor: "blue",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: MaterialTheme.brandPrimary,
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
});
export default CategoryEntry;
