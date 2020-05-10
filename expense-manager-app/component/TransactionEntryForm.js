import React, { useState, useEffect, useCallback, useReducer } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import {
  Text,
  View,
  Form,
  Item,
  Label,
  Input,
  CheckBox,
  Icon,
} from "native-base";
import IoniconButton from "./UI/IoniconButton";
import MaterialIconsButton from "./UI/MaterialIconsButton";
import DatePicker, { convertToAppFormatDate } from "./UI/DatePicker";
import { HeaderRight } from "./UI/Header";
import MaterialTheme from "../native-base-theme/variables/material";

const CATEGORY_CHANGE = "CATEGORY_CHANGE";
const CATEGORY_TOUCHED = "CATEGORY_TOUCHED";
const AMOUNT_CHANGE = "AMOUNT_CHANGE";
const AMOUNT_BLUR = "AMOUNT_BLUR";
const TYPE_CHECK = "TYPE_CHECK";
const DESCRIPTION_CHANGE = "DESCRIPTION_CHANGE";
const DATE_CHANGE = "DATE_CHANGE";

const formReducer = (state, action) => {
  switch (action.type) {
    case CATEGORY_CHANGE:
      return {
        ...state,

        category: {
          categoryId: action.categoryId,
          categoryName: action.categoryName,
          categoryIcon: action.categoryIcon,
          categoryIconType: action.categoryIconType,
        },
      };
    case CATEGORY_TOUCHED:
      return {
        ...state,
        isCategoryTouched: true,
      };
    case AMOUNT_BLUR:
      return {
        ...state,
        isAmountTouched: true,
      };
    case AMOUNT_CHANGE:
      return {
        ...state,
        isAmountValid: action.value.length > 0 && action.value > 0,
        isAmountTouched: true,
        amount: action.value,
      };
    case TYPE_CHECK:
      return {
        ...state,
        isIncome: action.isIncome,
        isExpense: action.isExpense,
      };
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.value,
      };
    case DATE_CHANGE:
      return {
        ...state,
        date: action.value,
      };
    default:
      return state;
  }
};

const TransactionEntryForm = React.forwardRef((props, ref) => {
  const { category, isCategoryTouched } = props.route.params
    ? props.route.params
    : {};
  //const { istouched } =
  //console.log(category);
  const [show, setShow] = useState(false);
  //const [dateText, setDateText] = useState(convertToAppFormatDate(new Date()));
  //const [incomeType, setIncomeType] = useState(true);
  //const [expenseType, setExpenseType] = useState(false);

  const [form, formDispatch] = useReducer(formReducer, {
    isCategoryValid: false,
    isAmountValid: false,
    isAmountTouched: false,
    isCategoryTouched: false,
    isIncome: true,
    isExpense: false,
    amount: "0",
    date: convertToAppFormatDate(new Date()),
  });

  const categoryChangeHandler = useCallback(
    (text) => {
      //console.log(text);
      formDispatch({ type: CATEGORY_CHANGE, value: { id, name, icon } });
    },
    [form.category]
  );

  const amountBlurHandler = useCallback(() => {
    formDispatch({ type: AMOUNT_BLUR, isAmountTouched: true });
  }, [form.amount]);

  const amountChangeHandler = useCallback(
    (text) => {
      //console.log(text);
      formDispatch({ type: AMOUNT_CHANGE, isAmountTouched: true, value: text });
    },
    [form.amount]
  );

  const checkBoxHandler = useCallback(
    (type) => {
      // if (isChecked) return;
      let isIncome = false;
      let isExpense = false;

      switch (type) {
        case "Income":
          if (form.isIncome) return;
          isIncome = true;
          isExpense = false;
          break;
        case "Expense":
          if (form.isExpense) return;
          isIncome = false;
          isExpense = true;
          break;
      }

      formDispatch({
        type: TYPE_CHECK,
        isIncome: isIncome,
        isExpense: isExpense,
      });
    },
    [form.isIncome, form.isExpense]
  );

  const descriptionChangeHandler = useCallback(
    (text) => {
      //console.log(text);
      formDispatch({ type: DESCRIPTION_CHANGE, value: text });
    },
    [form.description]
  );

  const dateChangeHandler = useCallback(
    (date) => {
      //console.log(date);
      setShow(false);
      formDispatch({ type: DATE_CHANGE, value: date });
    },
    [form.date]
  );

  const categorySelectHandler = useCallback(() => {
    props.navigation.navigate("SearchTransactionHeads");
  }, [categorySelectHandler]);

  const submitHandler = useCallback(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={() => console.log("submit button clicked !!")}
        />
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    if (
      category &&
      form.category &&
      category.categoryId !== form.category.categoryId
    ) {
      formDispatch({
        type: CATEGORY_CHANGE,
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        categoryIcon: category.categoryIcon,
        categoryIconType: category.categoryIconType,
      });
    }
  }, [category]);

  useEffect(() => {
    if (isCategoryTouched) {
      formDispatch({
        type: CATEGORY_SELECT,
      });
    }
  }, [isCategoryTouched]);

  return (
    <Form>
      <Item stackedLabel>
        <Label style={styles.label}>Select Category</Label>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryLeftContainer}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={categorySelectHandler}
            >
              {form.category !== undefined ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    size={25}
                    android={category.categoryIcon}
                    ios={category.categoryIcon}
                    style={{
                      ...styles.iocn,
                      color: MaterialTheme.brandPrimary,
                    }}
                  />
                  <Text style={{ marginLeft: 10 }}>
                    {" "}
                    {category.categoryName}{" "}
                  </Text>
                </View>
              ) : (
                <Text>Please select a category!</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRightContainer}>
            <Icon
              name="checkmark-circle"
              //style={{ color: isFormValid.isCategoryValid ? "green" : "red" }}
            />
          </View>
        </View>
      </Item>
      <Item
        stackedLabel
        style={{ alignItems: "stretch" }}
        // success={
        // isFormValid.categoryInputTouched && isFormValid.isCategoryValid
        //}
        // error={
        //  isFormValid.categoryInputTouched && !isFormValid.isCategoryValid
        // }
      >
        <Label style={styles.label}>Amount</Label>
        <View style={styles.textBoxContainer}>
          <Input
            onChangeText={amountChangeHandler}
            value={form.amount}
            onBlur={amountBlurHandler}
            autoCapitalize="sentences"
            returnKeyType="next"
            keyboardType="decimal-pad"
          />
          <Icon
            name="checkmark-circle"
            //style={{ color: isFormValid.isCategoryValid ? "green" : "red" }}
          />
        </View>
      </Item>
      <Item stackedLabel style={{ alignItems: "stretch" }}>
        <Label style={styles.label}>Transaction Type</Label>
        <View style={styles.transactionTypeContainer}>
          <View style={styles.transactionTypeLeftContainer}>
            <CheckBox
              checked={form.isIncome}
              style={styles.checkbox}
              onPress={checkBoxHandler.bind(this, "Income")}
            />
            <Text style={styles.checkboxText}>Income</Text>
          </View>
          <View style={styles.transactionTypeRightContainer}>
            <CheckBox
              checked={form.isExpense}
              style={styles.checkbox}
              onPress={checkBoxHandler.bind(this, "Expense")}
            />
            <Text style={styles.checkboxText}>Expense</Text>
          </View>
        </View>
      </Item>
      <Item
        stackedLabel
        style={{ alignItems: "stretch" }}
        // success={
        // isFormValid.categoryInputTouched && isFormValid.isCategoryValid
        //}
        // error={
        //  isFormValid.categoryInputTouched && !isFormValid.isCategoryValid
        // }
      >
        <Label style={styles.label}>Description</Label>
        <View style={styles.textBoxContainer}>
          <Input
            onChangeText={descriptionChangeHandler}
            value={form.description}
            // onBlur={categoryBlurHandler}
            autoCapitalize="sentences"
            returnKeyType="next"
            keyboardType="default"
          />
        </View>
      </Item>
      <Item stackedLabel style={{ alignItems: "stretch" }}>
        <Label style={styles.label}>Transaction Date</Label>
        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              setShow(true);
            }}
          >
            <Text>{form.date}</Text>
          </TouchableOpacity>
          <MaterialIconsButton
            onPress={() => setShow(true)}
            iconName={Platform.OS === "android" ? "date-range" : "date-range"}
            iconSize={30}
            iconColor="black"
          />

          {show && (
            <DatePicker
              initialDate={form.date}
              onDateChange={dateChangeHandler}
            />
          )}
        </View>
      </Item>
    </Form>
  );
});

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
  },
  categoryLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  categoryRightContainer: {},
  categoryRightButton: {},
  transactionTypeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
    alignItems: "center",
  },
  transactionTypeLeftContainer: {
    flexDirection: "row",
  },
  transactionTypeRightContainer: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 25,
  },
  checkbox: {
    left: 0,
    borderRadius: MaterialTheme.CheckboxRadius,
  },
  checkboxText: {
    marginLeft: 5,
  },
  label: {
    fontSize: MaterialTheme.formLabelFontSize,
    fontWeight: "bold",
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
    alignItems: "center",
    //backgroundColor: "green",
  },
  textBoxContainer: {
    flex: 1,
    flexDirection: "row",
    //  height: 50,
    alignItems: "center",
  },
});

/*
const styles = {
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  textContent: {
    fontSize: 20,
    color: "red",
  },
};
*/

export default TransactionEntryForm;
