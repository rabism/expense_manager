import { Platform } from "react-native";
import Category from "../models/category";

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
      rootCategory.subcategory.push(subCategoryNode);
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
