import React, { useState, useCallback, useReducer, useEffect } from "react";
import { StyleSheet, TouchableOpacity, PixelRatio } from "react-native";
import { View, Icon, Text, ListItem } from "native-base";
import MaterialTheme from "../native-base-theme/variables/material";
import { SimpleLineIcons } from "@expo/vector-icons";
import ModalContainer from "./UI/ModalContainer";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
const CategoryListItem = (props) => {
  const [IsOptionModalVisible, setIsOptionModalVisible] = useState(false);
  const border = props.isLastChild ? { ...styles.border } : {};
  return (
    <View
      style={{
        ...styles.container,
        ...border,
        // height: props.isParent && props.hasChild ?  : 20,
        paddingTop: props.isParent ? 10 : null,
        paddingBottom:
          props.isParent && !props.hasChild
            ? 10
            : !props.isParent && props.isLastChild
            ? 10
            : null,
      }}
    >
      <TouchableOpacity onPress={props.onSelect} style={styles.leftContainer}>
        <View style={{ flex: !props.isParent ? 0.2 : null }}></View>
        <View
          style={{
            ...styles.rowContainer,
            alignItems: !props.isParent ? "center" : null,
            borderLeftWidth: !props.isParent ? 1 : null,
            borderColor: !props.isParent ? "black" : null,
            borderStyle: !props.isParent ? "dotted" : null,
          }}
        >
          {!props.isParent && (
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "black",
                borderStyle: "dotted",
                width: 20,
                height: 2,
              }}
            ></View>
          )}

          <Icon
            size={25}
            android={props.icon}
            ios={props.icon}
            style={{
              ...styles.iocn,
              color:
                props.isSelected === true
                  ? MaterialTheme.inverseTextColor
                  : MaterialTheme.brandPrimary,
              marginLeft: !props.isParent ? 15 : null,
            }}
          />

          <Text
            style={{
              color:
                props.isSelected === true
                  ? MaterialTheme.inverseTextColor
                  : null,
              ...styles.text,
            }}
          >
            {props.name}
          </Text>
        </View>
      </TouchableOpacity>
      {props.isParent && (
        <View style={styles.optionContainer}>
          <Menu
            onSelect={(value) => alert(`Selected number: ${value}`)}
            renderer={renderers.SlideInMenu}
          >
            <MenuTrigger>
              <Icon
                fontSize={15}
                name="options-vertical"
                //ios="option-vertical"
                type="SimpleLineIcons"
                style={{
                  color: MaterialTheme.brandPrimary,
                  fontSize: 20,
                }}
              />
            </MenuTrigger>
            <MenuOptions customStyles={menuOptions}>
              <MenuOption value="Add" text="Add" />
            </MenuOptions>
          </Menu>
        </View>
      )}
    </View>
  );
};

const menuOptions = {
  optionsContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  /*
  optionWrapper: {
    backgroundColor: "yellow",
    margin: 5,
  },
  optionTouchable: {
    underlayColor: "gold",
    activeOpacity: 70,
  },
  optionText: {
    color: "brown",
  },
  */
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",

    //  backgroundColor: "pink",
    marginHorizontal: 10,
  },
  border: {
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderColor: MaterialTheme.listBorderColor,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    //backgroundColor: "pink",
    flex: 1,
    // borderLeftWidth: 2,
    // borderColor: "black",
    //flexDirection: "row",
    // alignItems: "stretch",
  },
  iconContainer: {
    //flex: 0.18,
    width: 50,
    flexDirection: "row",
    alignItems: "center",
    //paddingLeft: 5,
  },
  centerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    //flex: 1,
    marginLeft: 20,
  },
  label: {
    fontSize: MaterialTheme.formLabelFontSize,
    fontWeight: "bold",
  },
  iocn: {
    //marginLeft: 10,
    fontSize: 25,
    color: MaterialTheme.brandPrimary,
    //flex: 1,
  },
  optionContainer: {
    //  width: 30,
    flexDirection: "row",
    //alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "pink",
  },
  menuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 50,
    backgroundColor: "#ecf0f1",
  },
});
export default CategoryListItem;
