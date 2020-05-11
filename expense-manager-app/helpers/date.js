const MONTH_NAME_ARRAY = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_NAME_ARRAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

var WEEK_MONTH_ARRAY = [1, 2, 3, 4, 5];

export const getFiscalYear = (date) => {
  let fiscalyear = "";

  if (date.getMonth() + 1 <= 3) {
    fiscalyear = `${date.getFullYear() - 1}-${date.getFullYear()}`;
  } else {
    fiscalyear = `${date.getFullYear()}-${date.getFullYear() + 1}`;
  }
  return fiscalyear;
};

export const getWeek = (date) => {
  return WEEK_MONTH_ARRAY[Math.floor(date.getDate() / 7)];
};

export const getDayName = (date) => {
  return DAY_NAME_ARRAY[date.getDay()];
};

export const getQuater = (date) => {
  return Math.floor(date.getMonth() / 3) + 1;
};

//export const getQuater = (date) => {
//return Math.floor(date.getMonth() / 3) + 1;
//};

export const convertToAppFormatDate = (date) => {
  const formatDate = `${
    MONTH_NAME_ARRAY[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return formatDate;
};
