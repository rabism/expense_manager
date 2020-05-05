import React, { useCallback, useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Container, Content } from "native-base";
import CategoryTreeView from "../component/CategoryTreeView";
import AppButton from "../component/UI/AppButton";
import ModalContainer from "../component/UI/ModalContainer";
import CategoryEntry from "../component/CategoryEntry";
const SearchTransactionHeads = (props) => {
  const [IsAddCategoryScreenVisible, setIsAddCategoryScreenVisible] = useState(
    false
  );

  const longPressHandler = useCallback(
    (nodeDetails) => {
      setIsAddCategoryScreenVisible(true);
      console.log(
        "on node long press!! " + nodeDetails.node.id + "  " + nodeDetails.level
      );
    },
    [IsAddCategoryScreenVisible]
  );

  const pressHandler = useCallback(
    (nodeDetails) => {
      redirectToEntry();
      console.log(
        "on node children press!! " +
          nodeDetails.node.id +
          "  " +
          nodeDetails.level
      );
    },
    [pressHandler]
  );

  const redirectToEntry = useCallback(
    () =>
      props.navigation.navigate("Root", {
        screen: "TransactionEntry",
      }),
    [redirectToEntry]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Content>
          <View style={{ paddingTop: 20 }}>
            <View style={styles.closeContainer}>
              <AppButton
                onPress={redirectToEntry}
                iconName="md-close"
                iconSize={20}
                iconColor="black"
                buttonType="ionicon"
              />
            </View>
            <CategoryTreeView
              onNodePress={pressHandler}
              onNodeLongPress={longPressHandler}
            />
          </View>
          <View>
            {IsAddCategoryScreenVisible && (
              <ModalContainer
                isVisible={IsAddCategoryScreenVisible}
                onModelClose={() => {
                  console.log("Modal Close");
                  setIsAddCategoryScreenVisible(false);
                }}
                style={{ justifyContent: "flex-start", margin: 0 }}
                containerStyle={{ flex: 1 }}
              >
                <CategoryEntry />
              </ModalContainer>
            )}
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
  closeContainer: {
    flexDirection: "row-reverse",
  },
});

export default SearchTransactionHeads;
