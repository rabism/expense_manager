export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_CATEGORY = "SET_CATEGORY";

const category = [
  {
    id: 1,
    name: "Monthly Bill",
    subcategory: [
      {
        id: 3,
        name: "Telephone Bill",
        subcategory: [
          {
            id: 4,
            name: "Landline",
          },
          {
            id: 5,
            name: "Mobile",
            subcategory: [
              {
                id: 8,
                name: "IPhone",
              },
            ],
          },
        ],
      },
      {
        id: 14,
        name: "Wifi14",
      },
      {
        id: 6,
        name: "Wifi",
      },
      {
        id: 12,
        name: "Wifi12",
      },
      {
        id: 13,
        name: "Wifi13",
      },
    ],
  },
  {
    id: 2,
    name: "Health",
    subcategory: [
      {
        id: 7,
        name: "Medicine",
      },
    ],
  },
];

export const loadCategory = () => {
  return async (dispatch) => {
    try {
      const dbResult = category;
      console.log(dbResult);
      dispatch({ type: SET_CATEGORY, category: dbResult });
    } catch (err) {
      throw err;
    }
  };
};
