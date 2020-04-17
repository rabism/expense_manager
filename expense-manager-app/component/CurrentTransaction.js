import React from "react";
import { StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Appointments",
    icon: "av-timer",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
];

const CurrentTransaction = (props) => {
  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
          bottomDivider
          chevron
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 10,
  },
});
export default CurrentTransaction;
