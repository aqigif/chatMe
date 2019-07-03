import React, { Component } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { Container, View, Content, Text } from "native-base";

class ChatList extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.messageReceiveWrapper}>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageSender}>Qolbu</Text>
            <Text style={styles.messageContentReceive}>
              Assalamu'alaikum Warahmatullahi Wabarakatu
            </Text>
          </View>
          <View style={styles.timeWrapper}>
            <Text style={styles.timeReceive}>8.00</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageSendWrapper}>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageContentSend}>
              Wa'alaikumsalam
            </Text>
          </View>
          <View style={styles.timeWrapper}>
            <Text style={styles.timeSend}>8.00</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageReceiveWrapper:{
    flexDirection: "row",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5
  },
  messageSendWrapper:{
    flexDirection: "row",
    backgroundColor: "#0449A7",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5
  },
  messageWrapper:{ maxWidth: 200 },
  messageSender:{ fontSize: 14, fontWeight: "bold" },
  messageContentReceive:{ fontSize: 14 },
  messageContentSend:{ color:'#fff',fontSize: 14 },
  timeWrapper:{ justifyContent: "flex-end", marginLeft: 10 },
  timeReceive:{ fontSize: 12, color: "grey" },
  timeSend:{ fontSize: 12, color: "#d1d1d1" }
});
export default ChatList