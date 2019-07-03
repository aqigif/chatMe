import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { Container, View, Content, Icon, Text } from "native-base";
import ChatList from './components/ChatList'
class Index extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#d1d1d1'}}>
        <ScrollView style={{padding:10}}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true })
          }}
        >
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
        </ScrollView>
        <View style={styles.addMessageContainer}>
          <View style={styles.inputMessageContainer}>
            <View style={styles.inputMessageWrapper}>
              <TextInput
                placeholder="Type your Message here.."
                numberOfLines={2}
                multiline={true}
                style={styles.inputMessage}
              />
            </View>
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableHighlight
              underlayColor={"#0767eb"}
              onPress={() => {}}
              style={styles.sendButtonWrapper}
            >
              <Icon name="send" style={styles.sendButtonIcon} />
            </TouchableHighlight>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  addMessageContainer: {
    flexDirection: "row",
    marginTop:15
  },
  inputMessageContainer: {
    flex: 4,
    left: 10,
    bottom: 7
  },
  inputMessageWrapper: {
    borderRadius: 30,
    backgroundColor:'#fff',
    width: "100%",
    maxHeight: 100
  },
  inputMessage: {
    padding: 5,
    paddingHorizontal: 20
  },
  sendButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 5,
    bottom: 5
  },
  sendButtonWrapper: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  sendButtonIcon: {
    color: "#0449A7",
    fontSize: 25
  }
});

export default Index;
