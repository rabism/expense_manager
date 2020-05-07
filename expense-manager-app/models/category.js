class Category {
  constructor(id, name, icon, iconType, subcategory, parentId = 0) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.iconType = iconType;
    this.subcategory = subcategory;
    this.parentId = parentId;
  }
}

export default Category;
