import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, PixelRatio, Platform } from "react-native";
import TreeView from "react-native-final-tree-view";
import { Card, CardItem, Icon } from "native-base";
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

  return (
    <Ionicons
      name={iconName}
      size={props.size}
      color={props.color}
      //style={{ alignSelf: "flex-end" }}
    />
  );
};

const CategoryTreeView = (props) => {
  const [selectedNode, setSelectedNode] = useState("");

  const category = useSelector((state) => state.appState.Category);
  const dispatch = useDispatch();

  const nodePressHandler = useCallback(
    (nodeDetails) => {
      //console.log(nodeDetails);
      setSelectedNode(nodeDetails.node.id);
      if (
        nodeDetails.node.subCategory === undefined ||
        nodeDetails.node.subCategory.length === 0
      ) {
        props.onNodePress(nodeDetails);
      }
    },
    [selectedNode]
  );

  const nodeLongPressHandler = useCallback(
    (nodeDetails) => {
      //console.log(nodeDetails);
      setSelectedNode(nodeDetails.node.id);
      props.onNodeLongPress(nodeDetails);
    },
    [selectedNode]
  );

  useEffect(() => {
    dispatch(appActions.loadTreeCategory());
  }, [dispatch]);

  return (
    <Card>
      <TreeView
        data={category} // defined above
        childrenKey="subCategory"
        getCollapsedNodeHeight={(obj) => {
          //console.log(obj.id + "  " + obj.level);
          return 50;
        }}
        onNodePress={nodePressHandler}
        onNodeLongPress={nodeLongPressHandler}
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <CardItem
              bordered
              style={{
                backgroundColor:
                  node.id === selectedNode ? MaterialTheme.brandPrimary : null,
              }}
            >
              <View
                style={{
                  marginLeft:
                    hasChildrenNodes === true ? 15 * level : 20 * level,
                  ...styles.listContainer,
                }}
              >
                <Icon
                  size={25}
                  android={node.icon}
                  ios={node.icon}
                  style={{
                    ...styles.iocn,
                    color:
                      node.id === selectedNode
                        ? MaterialTheme.inverseTextColor
                        : MaterialTheme.brandPrimary,
                  }}
                />
                <Text
                  style={{
                    color:
                      node.id === selectedNode
                        ? MaterialTheme.inverseTextColor
                        : null,
                    ...styles.text,
                  }}
                >
                  {node.name}
                </Text>
                <Indicator
                  size={25}
                  color={
                    node.id === selectedNode
                      ? MaterialTheme.inverseTextColor
                      : null
                  }
                  hasChildrenNodes={hasChildrenNodes}
                  isExpanded={isExpanded}
                />
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
    flex: 1,
  },
  label: {
    fontSize: MaterialTheme.formLabelFontSize,
    fontWeight: "bold",
  },
  iocn: {
    marginLeft: 5,
    fontSize: 25,
    color: MaterialTheme.brandPrimary,
    flex: 0.15,
  },
});
export default CategoryTreeView;
