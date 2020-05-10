import React, { useState, useCallback, useReducer } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { View, Form, Item, Input, Label, Icon } from "native-base";
import MaterialTheme from "../native-base-theme/variables/material";
//import AppButton from "../component/UI/AppButton";
import CategoryIconData from "../assets/icons";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "./UI/AppButton";
import { useDispatch } from "react-redux";
import * as appActions from "../store/expense-manager-actions";

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

const CategoryEntry = (props) => {
  const [isFormValid, formDispatch] = useReducer(categoryForReducer, {
    isCategoryValid: false,
    isIconValid: false,
    categoryValue: "",
    isCategoryValid: false,
    categoryInputTouched: false,
    iconAndroid: "",
    iconIos: "",
    iconType: "",
  });

  const dispatch = useDispatch();
  const saveHandler = useCallback(() => {
    if (isFormValid.isCategoryValid && isFormValid.isIconValid) {
      dispatch(
        appActions.saveCategory(
          isFormValid.categoryValue,
          isFormValid.iconAndroid,
          isFormValid.iconIos,
          isFormValid.iconType,
          props.parentCategoryId
        )
        //.then(() => {
        //  console.log("finish the action!");
        // })
      );
      props.hideModal();
    } else {
      console.log("not valid");
    }
  }, [isFormValid]);

  const iconSelectHandler = useCallback(
    (id, iconAndroid, iconIos, iconType) => {
      formDispatch({
        type: ICON_SELECT,
        iconId: id,
        iconAndroid: iconAndroid,
        iconIos: iconIos,
        iconType: iconType,
        iconId: id,
      });
    },
    [isFormValid]
  );

  const categoryBlurHandler = useCallback(() => {
    formDispatch({ type: INPUT_BLUR, touched: true });
  }, [isFormValid]);

  const categoryTextChangeHandler = useCallback(
    (text) => {
      //console.log(text);
      formDispatch({ type: INPUT_CHANGE, touched: true, value: text });
    },
    [isFormValid]
  );

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
          onPress={saveHandler}
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
        <Item
          stackedLabel
          style={{ alignItems: "stretch" }}
          success={
            isFormValid.categoryInputTouched && isFormValid.isCategoryValid
          }
          error={
            isFormValid.categoryInputTouched && !isFormValid.isCategoryValid
          }
        >
          <Label style={styles.label}>Category Name</Label>
          <View style={styles.textBoxContainer}>
            <Input
              onChangeText={categoryTextChangeHandler}
              value={isFormValid.categoryValue}
              onBlur={categoryBlurHandler}
              autoCapitalize="sentences"
              returnKeyType="done"
            />
            {isFormValid.categoryInputTouched && (
              <Icon
                name="checkmark-circle"
                style={{ color: isFormValid.isCategoryValid ? "green" : "red" }}
              />
            )}
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
                    isFormValid.iconId === item.id
                      ? MaterialTheme.selectedTextColor
                      : MaterialTheme.brandPrimary
                  }
                  buttonType="ionicon"
                  buttonStyle={{
                    ...styles.iconButton,
                    backgroundColor:
                      isFormValid.iconId === item.id
                        ? MaterialTheme.brandPrimary
                        : null,
                  }}
                  onPress={iconSelectHandler.bind(
                    this,
                    item.id,
                    item.android,
                    item.ios,
                    item.type
                  )}
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
  textBoxContainer: {
    flex: 1,
    flexDirection: "row",
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
    justifyContent: "space-between",
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
