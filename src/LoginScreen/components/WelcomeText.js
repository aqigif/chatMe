import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";

class WelcomeText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.welcomeTextg}>sign in to Chat!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 35,
    color: "#211818",
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomeTextg: {
    color: "#9B9CB4",
    fontSize: 30,
    fontWeight: "bold",
    borderRadius: 10,
    marginBottom:100
  }
});

export default WelcomeText;
