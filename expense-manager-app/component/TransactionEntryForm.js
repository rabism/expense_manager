import React, { useState, useEffect, useCallback } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import {
  Text,
  View,
  Form,
  Item,
  Label,
  Input,
  CheckBox,
  connectStyle,
} from "native-base";
import IoniconButton from "./UI/IoniconButton";
import MaterialIconsButton from "./UI/MaterialIconsButton";
import DatePicker, { convertToAppFormatDate } from "./UI/DatePicker";
import { HeaderRight } from "./UI/Header";
import MaterialTheme from "../native-base-theme/variables/material";
const TransactionEntryForm = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState(convertToAppFormatDate(new Date()));
  const [incomeType, setIncomeType] = useState(true);
  const [expenseType, setExpenseType] = useState(false);

  const checkBoxHandler = useCallback(
    (type, isChecked) => {
      if (isChecked) return;
      switch (type) {
        case "Income":
          setExpenseType(false);
          setIncomeType(true);
          break;
        case "Expense":
          setIncomeType(false);
          setExpenseType(true);
          break;
      }
    },
    [incomeType, expenseType]
  );

  const submitHandler = useCallback(() => {
    console.log("submit handler click!!");
  }, []);

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
  }, [submitHandler]);

  return (
    <Form>
      <Item stackedLabel>
        <Label style={styles.label}>Select Category</Label>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryLeftContainer}>
            <Text>Hello!</Text>
          </View>
          <View style={styles.categoryRightContainer}>
            <IoniconButton
              buttonStyle={styles.categoryRightButton}
              onPress={() =>
                props.navigation.navigate("SearchTransactionHeads")
              }
              iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
              iconSize={30}
              iconColor="black"
            />
          </View>
        </View>
      </Item>
      <Item stackedLabel style={{ alignItems: "stretch" }}>
        <Label style={styles.label}>Transaction Type</Label>
        <View style={styles.transactionTypeContainer}>
          <View style={styles.transactionTypeLeftContainer}>
            <CheckBox
              checked={incomeType}
              style={styles.checkbox}
              onPress={checkBoxHandler.bind(this, "Income", incomeType)}
            />
            <Text style={styles.checkboxText}>Income</Text>
          </View>
          <View style={styles.transactionTypeRightContainer}>
            <CheckBox
              checked={expenseType}
              style={styles.checkbox}
              onPress={checkBoxHandler.bind(this, "Expense", expenseType)}
            />
            <Text style={styles.checkboxText}>Expense</Text>
          </View>
        </View>
      </Item>
      <Item stackedLabel>
        <Label style={styles.label}>Description</Label>
        <Input />
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
            <Text>{dateText !== null ? dateText : "Please select a date"}</Text>
          </TouchableOpacity>
          <MaterialIconsButton
            onPress={() => setShow(true)}
            iconName={Platform.OS === "android" ? "date-range" : "date-range"}
            iconSize={30}
            iconColor="black"
          />

          {show && (
            <DatePicker
              initialDate={dateText}
              onDateChange={(selectedDate) => {
                setShow(false);
                setDateText(selectedDate);
              }}
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
