import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, View, Text, ListItem, Body, Left } from "native-base";
const list = [
  {
    title: "Book",
    icon: "md-book",
  },
  {
    title: "Ice Cream",
    icon: "md-ice-cream",
  },
  {
    title: "Laptop",
    icon: "md-laptop",
  },
  {
    title: "Basket Ball",
    icon: "md-baseball",
  },
  {
    title: "Beer",
    icon: "md-beer",
  },
  {
    title: "Bed",
    icon: "md-bed",
  },
  {
    title: "Gana Subscription",
    icon: "md-musical-notes",
  },
  {
    title: "Photo Subscription",
    icon: "md-photos",
  },
  {
    title: "Pizza",
    icon: "md-pizza",
  },
  {
    title: "Bus Fare",
    icon: "md-subway",
  },
  {
    title: "Wine",
    icon: "md-wine",
  },
  {
    title: "Internet",
    icon: "md-wifi",
  },
  {
    title: "Dyning",
    icon: "md-restaurant",
  },
  {
    title: "Medicine",
    icon: "md-medkit",
  },
  {
    title: "Trips",
    icon: "md-jet",
  },
  {
    title: "Gift",
    icon: "md-gift",
  },
  {
    title: "Fitness",
    icon: "md-fitness",
  },
  {
    title: "Football",
    icon: "md-football",
  },
  {
    title: "Clock",
    icon: "md-clock",
  },
  {
    title: "Camera",
    icon: "md-camera",
  },
  {
    title: "Bulb",
    icon: "md-bulb",
  },
];

const CurrentTransaction = (props) => {
  return (
    <View>
      {list.map((item, index) => (
        <ListItem icon key={index}>
          <Left>
            <Button>
              <Ionicons name={item.icon} size={25} />
            </Button>
          </Left>
          <Body>
            <Text>{item.title}</Text>
          </Body>
        </ListItem>
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
