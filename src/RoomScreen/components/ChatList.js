import React, { Component } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  AsyncStorage
} from "react-native";
import { Container, View, Content, Text } from "native-base";
import TimeAgo from 'react-native-timeago';

const axios = require("axios");

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
  }

  componentDidMount() {
    this._getDataUser();
  }

  _getDataUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        this.props.navigation.navigate("Login");
      } else {
        const token = await AsyncStorage.getItem("token");
        var config = { headers: { Authorization: "Bearer " + token } };
        let user = await axios.get(
          "http://192.168.137.1:3333/api/auth/profile",
          config
        );
        this.setState({ userId: user.data.id });
        console.log(this.state.userId);
      }
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <View>
        {this.props.chats.map((item, index) => (
          <TouchableOpacity
            style={
              this.state.userId != item.user.id
                ? styles.messageReceiveWrapper
                : styles.messageSendWrapper
            }
          >
            <View style={styles.messageWrapper}>
              {this.state.userId != item.user.id ? (
                <Text style={styles.messageSender}>{item.user.name}</Text>
              ) : (
                <View />
              )}
              <Text
                style={
                  this.state.userId != item.user.id
                    ? styles.messageContentReceive
                    : styles.messageContentSend
                }
              >
                {item.message}
              </Text>
            </View>
            <View style={styles.timeWrapper}>
              <Text
                style={
                  this.state.userId != item.user.id
                    ? styles.timeReceive
                    : styles.timeSend
                }
              >
                <TimeAgo time={item.updated_at}  interval={60000} />
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageReceiveWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5
  },
  messageSendWrapper: {
    flexDirection: "row",
    backgroundColor: "#0449A7",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5
  },
  messageWrapper: { maxWidth: 200 },
  messageSender: { fontSize: 14, fontWeight: "bold" },
  messageContentReceive: { fontSize: 14 },
  messageContentSend: { color: "#fff", fontSize: 14 },
  timeWrapper: { justifyContent: "flex-end", marginLeft: 10 },
  timeReceive: { fontSize: 12, color: "grey" },
  timeSend: { fontSize: 12, color: "#d1d1d1" }
});
export default ChatList;
