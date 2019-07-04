import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  AsyncStorage,
  FlatList
} from "react-native";
import { Container, View, Content, Icon, Text } from "native-base";
import ChatList from "./components/ChatList";
import { withNavigation } from "react-navigation";

const axios = require("axios");
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: [],
      message:""
    };
  }

  static navigationOptions = {
    title: "roomName"
  };
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        this.props.navigation.navigate("Login");
      } else {
        setInterval(() => {
          this._getDataChat();
        }, 1000);
        this._getDataUser();
      };
    } catch (error) {
      console.error(error);
    }
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
  _getDataChat = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const { navigation } = this.props;
      const roomId = navigation.getParam(
        "roomId",
        this.props.navigation.state.params.roomId
      );
      if (token === null) {
        this.props.navigation.navigate("Login");
      } else {
        const token = await AsyncStorage.getItem("token");
        var config = { headers: { Authorization: "Bearer " + token } };
        let room = await axios.get(
          `http://192.168.137.1:3333/api/v1/rooms/${roomId}`,
          config
        );
        this.setState({ room: room.data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  _handleSend = async () => {
    const token = await AsyncStorage.getItem("token");
    const { navigation } = this.props;
    const roomId = navigation.getParam(
      "roomId",
      this.props.navigation.state.params.roomId
    );
    console.log(roomId+this.state.message)
    var config = { headers: { Authorization: "Bearer " + token } };
    axios
      .post(
        "http://192.168.137.1:3333/api/v1/chats",
        {
          message: this.state.message,
          room_id: roomId
        },
        config
      )
      .then(res => {
        this.setState({ message: "" });
        setInterval(() => {
          this._getDataChat();
        }, 100);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#d1d1d1" }}>
        <ScrollView
          style={{ padding: 10 }}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {this.state.room.length > 0 ? (
            <FlatList
              data={this.state.room}
              renderItem={({ item }) => (
                <ChatList roomId={item.id} chats={item.chats} />
              )}
            />
          ) : (
            <View />
          )}
        </ScrollView>
        <View style={styles.addMessageContainer}>
          <View style={styles.inputMessageContainer}>
            <View style={styles.inputMessageWrapper}>
              <TextInput
                placeholder="Type your Message here.."
                numberOfLines={2}
                multiline={true}
                style={styles.inputMessage}
                onChangeText={message => this.setState({ message })}
                value={this.state.message}
              />
            </View>
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableHighlight
              underlayColor={"#0767eb"}
              onPress={this._handleSend}
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
    marginTop: 15
  },
  inputMessageContainer: {
    flex: 4,
    left: 10,
    bottom: 7
  },
  inputMessageWrapper: {
    borderRadius: 30,
    backgroundColor: "#fff",
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
  },
});

export default withNavigation(Index);
