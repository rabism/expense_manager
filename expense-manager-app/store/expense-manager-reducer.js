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
        //  Category: action.category.map(
        // (pl) => new Category(pl.id.toString(), pl.name, pl.subcategory)
        //),
      };
    case ADD_CATEGORY:
      return {};
    default:
      return state;
  }
};
