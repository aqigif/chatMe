import React, { Component } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { Container, View, Content, Text } from "native-base";
import RoomList from "./components/RoomList";
import ChatButton from './components/ChatButton'

class Index extends Component {
  render() {
    return (
      <Container>
        <Content>
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
          <RoomList />
        </Content>
        <ChatButton />
      </Container>
    );
  }
}

export default Index;
