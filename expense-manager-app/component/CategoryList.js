import React, { useState, useCallback, useReducer, useEffect } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import {
  View,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Card,
  CardItem,
  ListItem,
  List,
} from "native-base";
import MaterialTheme from "../native-base-theme/variables/material";
import { useSelector, useDispatch } from "react-redux";
import * as appActions from "../store/expense-manager-actions";
import { HeaderRight } from "./UI/Header";
import CategoryListItem from "./CategoryListItem";

//import AppButton from "../component/UI/AppButton";
//import CategoryIconData from "../assets/icons";
//import { Ionicons } from "@expo/vector-icons";
//import AppButton from "./UI/AppButton";
//import { useDispatch } from "react-redux";
//import * as appActions from "../store/expense-manager-actions";

/*
const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";
const ICON_SELECT = "ICON_SELECT";

const categoryForReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        categoryValue: action.value,
        isCategoryValid: action.value.length > 0,
        categoryInputTouched: action.touched,
      };
    case INPUT_BLUR:
      return {
        ...state,
        categoryInputTouched: action.touched,
      };
    case ICON_SELECT:
      return {
        ...state,
        isIconValid:
          action.iconType.length > 0 &&
          action.iconAndroid.length > 0 &&
          action.iconIos.length > 0,
        iconAndroid: action.iconAndroid,
        iconIos: action.iconIos,
        iconType: action.iconType,
        iconId: action.iconId,
      };
    // case  SAVE_CLICK :
    // return{
    //   ...state,
    //   isFormValid: action.iconValue
    // }
    default:
      return state;
  }
};
*/

const CategoryList = (props) => {
  const [selectedNode, setSelectedNode] = useState("");
  const categoryListData = useSelector((state) => state.appState.Category);
  console.log(categoryListData);
  const dispatch = useDispatch();

  const addCategotyHandler = () => {
    console.log("hellp Add");
  };

  const categorySelectHandler = () => {};
  useEffect(() => {
    dispatch(appActions.loadCategory());
  }, [dispatch]);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={addCategotyHandler}
        />
      ),
    });
  }, [addCategotyHandler]);
  return (
    <View style={styles.container}>
      {categoryListData.map((item, index) => {
        return (
          <View key={item.id}>
            <View
              // last
              //bordered={categoryListData.length !== index + 1}
              key={item.id}
            >
              <CategoryListItem
                isLastChild={item.subCategory.length === 0}
                isParent={true}
                hasChild={item.subCategory.length}
                icon={item.icon}
                name={item.name}
                isSelected={selectedNode === item.id ? true : false}
                selectHandler={categorySelectHandler}
              ></CategoryListItem>
            </View>
            {item.subCategory.map((itemChild, index) => {
              return (
                <View key={itemChild.id}>
                  <CategoryListItem
                    isLastChild={item.subCategory.length === index + 1}
                    isParent={false}
                    icon={itemChild.icon}
                    name={itemChild.name}
                    isSelected={selectedNode === itemChild.id ? true : false}
                    selectHandler={categorySelectHandler}
                  ></CategoryListItem>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CategoryList;
