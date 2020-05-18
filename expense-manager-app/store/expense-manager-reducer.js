import { ADD_CATEGORY, SET_CATEGORY } from "./expense-manager-actions";
import Category from "../models/category";
const initialState = {
  Category: [],
  Transaction: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        Category: action.category,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        Category: addCategoryToState(state.Category, action.category),
      };
    /*case ADD_TRANSACTION:
      return {
        ...state,
        Transaction: [...state.transaction, action.transaction], //addCategoryToState(state.Category, action.category),
      };
    case SET_TRANSACTION:
      return {
        ...state,
        Transaction: action.transaction, //addCategoryToState(state.Category, action.category),
      };*/
    default:
      return state;
  }
};

const addCategoryToState = (category, newCategory) => {
  if (newCategory.parentId == 0) {
    return [...category, newCategory];
  } else {
    return category.map((item) => {
      if (item.id === newCategory.parentId) {
        item.subCategory.concat(newCategory);
      }
      return item;
    });
  }
};
