import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Container, Content, Text, View, ListItem, List } from "native-base";

const data = [
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
        id: 6,
        name: "Wifi",
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

const SearchTransactionHeads = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Content>
          <View style={{ paddingTop: 30 }}>
            <List>
              {data.map((item, index) => {
                return (
                  <ListItem key={item.id}>
                    <Text> {item.name}</Text>
                  </ListItem>
                );
              })}
            </List>
          </View>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchTransactionHeads;
