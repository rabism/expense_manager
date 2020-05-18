class Category {
  constructor(id, name, icon, iconType, subCategory, parentId = 0) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.iconType = iconType;
    this.subCategory = subCategory;
    this.parentId = parentId;
  }
}

export default Category;
