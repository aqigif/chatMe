import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, TouchableOpacity } from "react-native";
import { Container, View, Content, Text, Icon } from "native-base";

class ChatButton extends Component {
  render() {
    return (
        <View style={styles.chatButtonContainer}>
          <TouchableHighlight
            underlayColor={"#0767eb"} onPress={() => {}}
            style={styles.chatButtonWrapper}
          >
            <Icon name="chatbubbles" style={styles.chatButtonIcon}/>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  chatButtonContainer:{
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  },
  chatButtonWrapper:{
    backgroundColor: "#0449A7",
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    position: "absolute",
    justifyContent:'center',
    alignItems:'center'
  },
  chatButtonIcon:{
    color: '#fff'
  }

});

export default ChatButton