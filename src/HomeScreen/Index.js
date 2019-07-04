import React, { Component } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
  FlatList
} from "react-native";
import { Container, View, Content, Text } from "native-base";
import RoomList from "./components/RoomList";
import ChatButton from "./components/ChatButton";
import { withNavigation } from "react-navigation";
import LogoTitle from '../components/LogoTitle'

const axios = require("axios");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      isFocus: false
    };
  }
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        this.props.navigation.navigate("Login");
      } else {
        const token = await AsyncStorage.getItem("token");
        var config = { headers: { Authorization: "Bearer " + token } };
        let rooms = await axios.get(
          "http://192.168.137.1:3333/api/v1/rooms",
          config
        );
        this.setState({ rooms:rooms.data.data });
        console.log(this.state.rooms)
      }
    } catch (error) {
      console.error(error);
    }
  }


  handleLogout = async () => {
    try {
      const token = await AsyncStorage.removeItem("token");
      console.log(token);
      if (token == null) {
        this.props.navigation.navigate("Login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <TouchableOpacity onPress={this.handleLogout}>
        <Text style={{color:'#000', fontWeight:"bold", marginRight:20}}>Logout</Text>
      </TouchableOpacity>
    ),
  }
  render() {

    console.log(this.state.rooms)
    return (
      <Container>
        <Content>
          {
            (this.state.rooms.length>0)
            ?
            <FlatList
              data={this.state.rooms}
              renderItem={({ item }) => (
                <RoomList
                  roomId={item.id}
                  avatar={item.avatar}
                  roomName={item.name}
                  sender={item.chats.length>0?item.chats[0].user.name:" "}
                  lastMessage={item.chats.length>0?item.chats[0].message:" "}
                  time={item.chats.length>0?item.chats[0].updated_at:item.updated_at}
                />
              )}
            />
            :
            <View />
          }
        </Content>
        <ChatButton />
      </Container>
    );
  }
}

export default Index;
