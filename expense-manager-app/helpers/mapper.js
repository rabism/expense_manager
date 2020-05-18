import { Platform } from "react-native";
import Category from "../models/category";
import Transaction from "../models/transaction";

export const mapToCategoryModel = (
  id,
  categoryName,
  iconAndroid,
  iconIos,
  iconType,
  parentId,
  subcatogory
) => {
  const category = new Category(
    id,
    categoryName,
    Platform.OS === "android" ? iconAndroid : iconIos,
    iconType,
    parentId,
    subcatogory
  );
  return category;
};

export const mapToTreeModel = (data) => {
  //data = dbData;
  const generateChild = (rootCategory) => {
    const childNode = data.filter((item) => item.parent_id === rootCategory.id);
    childNode.forEach((item) => {
      const subCategoryNode = new Category(
        item.id,
        item.category_name,
        Platform.OS === "android" ? item.icon_android : item.icon_ios,
        item.icon_type,
        []
      );
      rootCategory.subCategory.push(subCategoryNode);
      generateChild(subCategoryNode);
    });
  };

  const TreeDataModel = [];
  const rootNode = data.filter((item) => item.parent_id === 0);

  rootNode.forEach((item) => {
    const icon = Platform.OS === "android" ? item.icon_android : item.icon_ios;
    //const root
    const root = new Category(
      item.id,
      item.category_name,
      Platform.OS === "android" ? item.icon_android : item.icon_ios,
      item.icon_type,
      []
    );
    generateChild(root);
    TreeDataModel.push(root);
  });
  return TreeDataModel;
};

export const mapToCategoryList = (dbRows) => {
  const rootNode = dbRows.filter((item) => item.parent_id === 0);
  const categoryList = rootNode.map((item) => {
    const childNode = dbRows.filter(
      (itemChild) => itemChild.parent_id === item.id
    );
    const childCategoryList = childNode.map((ele) => {
      const childCategory = new Category(
        ele.id,
        ele.category_name,
        Platform.OS === "android" ? ele.icon_android : ele.icon_ios,
        ele.icon_type,
        [],
        ele.parent_id
      );
      return childCategory;
    });

    const root = new Category(
      item.id,
      item.category_name,
      Platform.OS === "android" ? item.icon_android : item.icon_ios,
      item.icon_type,
      childCategoryList
    );

    return root;
  });
  return categoryList;
};

export const mapToTransactionModel = (dbRows) => {
  const transaction = new Transaction(
    dbRows.id,
    dbRows.transaction_type,
    dbRows.category_id,
    dbRows.category_icon,
    dbRows.category_name,
    dbRows.category_icon_type,
    dbRows.transaction_date,
    dbRows.description,
    dbRows.transaction_day,
    dbRows.transaction_week,
    dbRows.transaction_month,
    dbRows.transaction_quater,
    dbRows.transaction_year,
    dbRows.transaction_fiscal_year,
    dbRows.transaction_day_of_week,
    dbRows.amount_credit,
    dbRows.amount_debit
  );
  return transaction;
};
