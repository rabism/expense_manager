import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, PixelRatio, Platform } from "react-native";
import TreeView from "react-native-final-tree-view";
import { Card, CardItem, Label } from "native-base";
import MaterialTheme from "../native-base-theme/variables/material";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as appActions from "../store/expense-manager-actions";

const Indicator = (props) => {
  let iconName = "";
  if (!props.hasChildrenNodes) {
    // iconName = "md-remove";
    // size=5;
    return null;
  } else if (props.isExpanded) {
    iconName = "md-remove";
  } else {
    iconName = "md-add";
  }

  return <Ionicons name={iconName} size={props.size} color={props.color} />;
};

const CategoryTreeView = (props) => {
  const [selectedNode, setSelectedNode] = useState("");

  const category = useSelector((state) => state.appState.Category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.loadCategory());
  }, [dispatch]);

  return (
    <Card>
      <TreeView
        data={category} // defined above
        childrenKey="subcategory"
        getCollapsedNodeHeight={(obj) => {
          //console.log(obj.id + "  " + obj.level);
          return 50;
        }}
        onNodePress={(nodeDetails) => {
          setSelectedNode(nodeDetails.node.id);
          if (
            nodeDetails.node.subcategory === undefined ||
            nodeDetails.node.subcategory.length === 0
          ) {
            props.onNodePress(nodeDetails);
          }

          //pressHandler(nodeDetails);
        }}
        onNodeLongPress={(nodeDetails) => {
          setSelectedNode(nodeDetails.node.id);
          props.onNodeLongPress(nodeDetails);
          // longPressHandler(nodeDetails);
        }}
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <CardItem
              bordered
              style={{
                backgroundColor:
                  node.id === selectedNode ? MaterialTheme.activeBgColor : null,
              }}
            >
              <View
                style={{
                  marginLeft:
                    hasChildrenNodes === true ? 15 * level : 20 * level,
                  ...styles.listContainer,
                }}
              >
                <Indicator
                  size={20}
                  color={
                    node.id === selectedNode ? MaterialTheme.brandPrimary : null
                  }
                  hasChildrenNodes={hasChildrenNodes}
                  isExpanded={isExpanded}
                />
                <Text
                  style={{
                    color:
                      node.id === selectedNode
                        ? MaterialTheme.brandPrimary
                        : null,
                    ...styles.text,
                  }}
                >
                  {node.name}
                </Text>
              </View>
            </CardItem>
          );
        }}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  closeContainer: {
    flexDirection: "row-reverse",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //paddingVertical: 5,
    //borderLeftWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    //backgroundColor: MaterialTheme.listBg,
    //borderBottomColor: MaterialTheme.listBorderColor,
    // borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    //borderColor: MaterialTheme.listBorderColor,
  },
  text: {
    fontSize: 18,
    //color: "ios" === Platform.ios ? undefined : MaterialTheme.listNoteColor,
    marginLeft: 2,
  },
  label: {
    fontSize: MaterialTheme.formLabelFontSize,
    fontWeight: "bold",
  },
});
export default CategoryTreeView;
