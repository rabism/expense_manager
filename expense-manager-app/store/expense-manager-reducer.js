import { ADD_CATEGORY, SET_CATEGORY } from "./expense-manager-actions";
import Category from "../models/category";
const initialState = {
  Category: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        Category: action.category,
      };
    case ADD_CATEGORY:
      return {
        Category: addCategoryToState(state.Category, action.category),
      };
    default:
      return state;
  }
};
const addCategoryToState = (category, newCategory) => {
  const copyCategory = [...category];
  const findCategory = (parent) => {
    if (parent.id === newCategory.parentId) {
      parent.subcategory.push(newCategory);
      return true;
    }
    for (const el of parent.subcategory) {
      findCategory(el);
    }
  };
  for (const item of copyCategory) {
    if (findCategory(item) === true) {
      break;
    }
  }

  return copyCategory;
};
