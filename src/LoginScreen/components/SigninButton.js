import React, { Component } from "react";
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

class SignInButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.buttonSigninWrapper}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.onPress}  style={styles.buttonSignin}>
            <Text style={styles.buttonSigninText}>Start chat...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonSigninWrapper: {
    marginTop: 50,
    marginBottom: 30,
    justifyContent: "center"
  },
  buttonSignin: {
    backgroundColor: "#f0f6ff",
    width: 150,
    height: 60,
    justifyContent: "center",
    borderRadius: 10
  },
  buttonSigninText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default SignInButton;