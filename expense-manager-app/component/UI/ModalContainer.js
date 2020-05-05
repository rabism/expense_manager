import React from "react";
import Modal from "react-native-modal";
import { StyleSheet, View } from "react-native";
import MaterialTheme from "../../native-base-theme/variables/material";
import { Container, Content } from "native-base";
const ModalContainer = (props) => {
  //const [isModelVisible, setIsModalVisible] = useState(false);

  //const toggleModal = useCallback(() => {
  //setIsModalVisible(!isModelVisible);
  // props.onModelClose();
  //}, [isModelVisible]);

  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={props.onModelClose}
      onBackdropPress={props.onBackdropsClose}
      style={props.style !== undefined ? props.style : null}
      animationIn="slideInDown"
      animationOut="slideOutUp"
    >
      <Container>
        <Content>
          <View style={{ ...styles.container, ...props.containerStyle }}>
            {React.cloneElement(props.children, {
              hideModal: props.onModelClose,
            })}
          </View>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // padding: MaterialTheme.contentPadding,
    borderRadius: 4,

    // borderColor: "rgba(0, 0, 0, 0.1)",
    // height: "100%",
  },
});
export default ModalContainer;
