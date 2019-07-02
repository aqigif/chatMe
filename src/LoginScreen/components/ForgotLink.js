import React, { Component } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text, View } from "native-base"

class ForgotLink extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.linkForgot}>Forgot your Password?</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  linkForgot:{
    marginTop:10,
    color:'#0449A7',
    fontWeight:'bold',
    textDecorationLine:'underline'
  },
})

export default ForgotLink
