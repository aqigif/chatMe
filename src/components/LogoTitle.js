import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import {Text} from "native-base";

class Logo extends Component {
  render() {
    return (
    <Text style={styles.logob}>
        chat
        <Text style={styles.logobb}>
        Me!
        </Text>
    </Text>
    )
  }
}

export default Logo;

const styles = StyleSheet.create({
    logob:{
      marginLeft:20,
      color:'#211818',
      fontSize:22,
      fontWeight:'bold',
    },
    logobb:{
      color:'#0449A7',
      fontSize:22,
    }
});
