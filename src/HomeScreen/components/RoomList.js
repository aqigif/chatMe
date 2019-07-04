import React, { Component } from "react"
import { TouchableHighlight, TouchableOpacity, Image, StyleSheet } from "react-native"
import { Container, View, Content, Text } from "native-base"
import { withNavigation } from "react-navigation";
import TimeAgo from 'react-native-timeago';

class RoomList extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor={"#d1d1d1"} onPress={() => 
        this.props.navigation.navigate('Room',{roomId:this.props.roomId})}>
        <View style={styles.roomListWrapper}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={{
                uri:this.props.avatar}}
            />
          </View>
          <View style={styles.roomDetailWrapper}>
            <Text style={styles.roomName}>{this.props.roomName}</Text>
            <Text style={styles.lastMessage} numberOfLines={1}>{this.props.sender} • {this.props.lastMessage}</Text>
          </View>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>
            <TimeAgo time={this.props.time}  interval={60000} />
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  roomListWrapper: { 
    padding:20, 
    flexDirection: "row" 
  },
  avatarWrapper: { 
    flex: 1, 
    justifyContent: "center" 
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 45/2
  },
  roomDetailWrapper: { 
    flex: 3, 
    justifyContent: "center"
  },
  roomName: { 
    fontWeight: "bold",
    color:'#272123',
    fontSize: 18
  },
  lastMessage: { 
    fontSize: 14 ,
    color:'#848589'
  },
  timeWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  time: { 
    fontSize: 12 ,
    color:'#848589'
  }
})
export default withNavigation(RoomList)
