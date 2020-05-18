import {
  fetchCategory,
  addCategory,
  addTransaction,
  fetchTransaction,
} from "../helpers/db";
import {
  mapToTreeModel,
  mapToCategoryModel,
  mapToTransactionModel,
  mapToCategoryList,
} from "../helpers/mapper";
import Category from "../models/category";
import { Platform } from "react-native";
import Transaction from "../models/transaction";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_CATEGORY = "SET_CATEGORY";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_TRANSACTION = "SET_TRANSACTION";

export const loadTreeCategory = () => {
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

export const loadCategory = () => {
  return async (dispatch) => {
    try {
      const resultdb = await fetchCategory();
      const categoryList = mapToCategoryList(resultdb.rows._array);
      // console.log("hello");
      //console.log(categoryList);
      dispatch({ type: SET_CATEGORY, category: categoryList });
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

export const loadTransaction = () => {
  return async (dispatch) => {
    try {
      const resultdb = await fetchTransaction();
      const transactionList = mapToTransactionModel(resultdb.rows._array);
      dispatch({ type: SET_TRANSACTION, transaction: transactionList });
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
      //console.log(resultdb);

      // const rdb = await fetchTransaction();
      //console.log(rdb);

      const transaction = Transaction(
        resultdb.insertId,
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

      dispatch({
        type: ADD_TRANSACTION,
        transaction: transaction,
      });
    } catch (err) {
      throw err;
    }
  };
};
