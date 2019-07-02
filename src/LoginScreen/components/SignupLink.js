import React, { Component } from "react";
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";

class SignUpLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.link}>
          <Text style={styles.linkb}>
            You don't have an account?{" "}
          </Text>
        <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.linkSignUp}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link:{
    marginTop: 10,
    flexDirection:'row'
  },
  linkb: {
    color: "#211818",
    fontWeight: "bold"
  },
  linkSignUp: {
    color: "#0449A7",
    textDecorationLine: "underline",
    fontWeight: "bold"
  }
});

export default SignUpLink;
