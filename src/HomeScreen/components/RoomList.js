import React, { Component } from "react"
import { TouchableHighlight, TouchableOpacity, Image, StyleSheet } from "react-native"
import { Container, View, Content, Text } from "native-base"

class RoomList extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor={"#d1d1d1"} onPress={() => {}}>
        <View style={styles.roomListWrapper}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  "https://m.media-amazon.com/images/M/MV5BZThkYjdjNWEtMDM2MS00MDllLWI2OGEtN2JhMmRhZjdmNDUwXkEyXkFqcGdeQXVyNjUyMDYyNDE@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
              }}
            />
          </View>
          <View style={styles.roomDetailWrapper}>
            <Text style={styles.roomName}>Room Name</Text>
            <Text style={styles.lastMessage}>Sender • Last Message</Text>
          </View>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>Time</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  roomListWrapper: { 
    padding: 20, 
    flexDirection: "row" 
  },
  avatarWrapper: { 
    flex: 1, 
    justifyContent: "center" 
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  roomDetailWrapper: { 
    flex: 3, 
    justifyContent: "center" 
  },
  roomName: { 
    fontWeight: "bold", 
    fontSize: 20 
  },
  lastMessage: { 
    fontSize: 14 
  },
  timeWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  time: { 
    fontSize: 14 
  }
})
export default RoomList
