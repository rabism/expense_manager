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
  const [parentCategoryId, setParentCategoryId] = useState(0);

  const longPressHandler = useCallback(
    (nodeDetails) => {
      setIsAddCategoryScreenVisible(true);
      setParentCategoryId(nodeDetails.node.id);
      //console.log(
      // "on node long press!! " + nodeDetails.node.id + "  " + nodeDetails.level
      // );
    },
    [IsAddCategoryScreenVisible]
  );

  const pressHandler = useCallback(
    (nodeDetails) => {
      /*edirectToEntry(nodeDetails);
      console.log(
        "on node children press!! " +
          nodeDetails.node.id +
          "  " +
          nodeDetails.level
      );*/

      props.navigation.navigate("Root", {
        screen: "TransactionEntry",
        params: {
          isCategoryTouched: true,
          category: {
            categoryId: nodeDetails.node.id,
            categoryName: nodeDetails.node.name,
            categoryIcon: nodeDetails.node.icon,
            categoryIconType: nodeDetails.node.iconType,
          },
        },
      });
    },
    [pressHandler]
  );

  const closeHandler = useCallback(() => {
    // console.log("close modal!!");
    props.navigation.navigate("Root", {
      screen: "TransactionEntry",
      params: {
        isCategoryTouched: true,
      },
    });
  }, [closeHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Content>
          <View style={{ paddingTop: 20 }}>
            <View style={styles.closeContainer}>
              <AppButton
                onPress={closeHandler}
                iconName="md-close"
                iconSize={30}
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
                <CategoryEntry parentCategoryId={parentCategoryId} />
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
