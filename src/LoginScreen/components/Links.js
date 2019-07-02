import React, { Component } from "react"
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "native-base"

class Links extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.link}>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.linkSignUp}>Sign up</Text>
      </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.linkForgot}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    marginTop: 10,
    flexDirection: "row"
  },
  linkForgot: {
    marginLeft: 20,
    color: "#0449A7",
    textDecorationLine: "underline",
    fontWeight: "bold"
  },
  linkSignUp: {
    color: "#0449A7",
    textDecorationLine: "underline",
    fontWeight: "bold"
  }
})

export default Links
