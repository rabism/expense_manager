import React from "react";
import { View } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { convertToAppFormatDate } from "../../helpers/date";

const DatePicker = (props) => {
  let date = new Date();
  if (props.initialDate !== null) {
    date = new Date(props.initialDate);
  }

  handleOnChange = (event, selectedDate) => {
    // const monthIndex = selectedDate.getMonth();
    // const monthName = MONTH_NAME_ARRAY[monthIndex];
    const formatDate = convertToAppFormatDate(selectedDate);
    props.onDateChange(formatDate);
  };

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={handleOnChange}
      />
    </View>
  );
};
export default DatePicker;
