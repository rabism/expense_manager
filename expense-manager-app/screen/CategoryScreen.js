import React from "react";
import { Button, Text, View, Container, Content, Icon } from "native-base";
import CategoryList from "../component/CategoryList";
import { MenuProvider } from "react-native-popup-menu";
const CategoryScrceen = React.forwardRef((props, ref) => {
  return (
    <Container>
      <Content>
        <View EntryForm>
          <MenuProvider>
            <CategoryList
              navigation={props.navigation}
              route={props.route}
            ></CategoryList>
          </MenuProvider>
        </View>
      </Content>
    </Container>
  );
});

export const screenOptions = (navData) => {
  return {
    headerTitle: "Category",
  };
};

export default CategoryScrceen;
