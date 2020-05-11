import {
  fetchCategory,
  addCategory,
  addTransaction,
  fetchTransaction,
} from "../helpers/db";
import { mapToTreeModel, mapToCategoryModel } from "../helpers/mapper";
import Category from "../models/category";
import { Platform } from "react-native";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_CATEGORY = "SET_CATEGORY";

export const loadCategory = () => {
  return async (dispatch) => {
    try {
      const resultdb = await fetchCategory();
      const treeModel = mapToTreeModel(resultdb.rows._array);
      dispatch({ type: SET_CATEGORY, category: treeModel });
    } catch (err) {
      throw err;
    }
  };
};

export const saveCategory = (
  categoryName,
  iconAndroid,
  iconIos,
  iconType,
  parentId
) => {
  return async (dispatch) => {
    try {
      const resultdb = await addCategory(
        categoryName,
        iconAndroid,
        iconIos,
        iconType,
        parentId
      );
      // console.log(resultdb);
      const category = mapToCategoryModel(
        resultdb.insertId,
        categoryName,
        iconAndroid,
        iconIos,
        iconType,
        [],
        parentId
      );
      dispatch({
        type: ADD_CATEGORY,
        category: category,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const saveTransaction = (
  transactionType,
  categoryId,
  categoryIcon,
  categoryName,
  categoryIconType,
  transactionDate,
  description,
  transactionDay,
  transactionWeek,
  transactionMonth,
  transactionQuater,
  transactionYear,
  transactionFiscalYear,
  transactionDayOfWeek,
  amountCredit,
  amountDebit
) => {
  return async (dispatch) => {
    try {
      const resultdb = await addTransaction(
        transactionType,
        categoryId,
        categoryIcon,
        categoryName,
        categoryIconType,
        transactionDate,
        description,
        transactionDay,
        transactionWeek,
        transactionMonth,
        transactionQuater,
        transactionYear,
        transactionFiscalYear,
        transactionDayOfWeek,
        amountCredit,
        amountDebit
      );
      console.log(resultdb);

      const rdb = await fetchTransaction();
      console.log(rdb);

      //   dispatch({
      //    type: ADD_CATEGORY,
      //category: category,
      // });
    } catch (err) {
      throw err;
    }
  };
};
