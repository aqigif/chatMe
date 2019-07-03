import React, { Component } from 'react'
import { TouchableHighlight, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Container, View, Content,Icon, Text } from 'native-base';

class AddMessage extends Component {
  render() {
    return (
      <View style={styles.addMessageContainer}>
      <View style={styles.inputMessageContainer}>
        <View style={styles.inputMessageWrapper}>
          <TextInput 
            placeholder="Type your Message here.." 
            numberOfLines={2} 
            multiline={true} 
            style={styles.inputMessage}>
          </TextInput>
        </View>
      </View>
      <View style={styles.sendButtonContainer}>
        <TouchableHighlight
          underlayColor={"#0767eb"} onPress={() => {}}
          style={styles.sendButtonWrapper}
        >
          <Icon name="send" style={styles.sendButtonIcon}/>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addMessageContainer:{
    flexDirection:'row'
  },
  inputMessageContainer:{
    flex:4, 
    left:10, 
    bottom:5
  },
  inputMessageWrapper:{
    borderWidth:1,
    borderRadius:30, 
    borderColor:'grey',
    width:'100%', 
    maxHeight:100
  },
  inputMessage:{
    padding:5, 
    paddingHorizontal:20
  },
  sendButtonContainer:{
    flex:1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 5,
    bottom: 5
  },
  sendButtonWrapper:{
    backgroundColor: "#0449A7",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    position: "absolute",
    justifyContent:'center',
    alignItems:'center'
  },
  sendButtonIcon:{
    color: '#fff',
    fontSize:25
  }
});
export default AddMessage;
