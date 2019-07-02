import React, { Component } from "react";
import {Platform, View, StyleSheet} from 'react-native';
import {Text} from "native-base";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

class SigninInput extends Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
    <View style={styles.signinForm}>
        <TextInput 
            style={styles.signinInput} 
            placeholder="Email or Phone Number" 
            placeholderTextColor='#9B9CB4'
        />
        <TextInput 
            style={styles.signinInput} 
            secureTextEntry={true} 
            placeholder="Password" 
            placeholderTextColor='#9B9CB4'
        />
        <TouchableHighlight underlayColor="#02306e" onPress={this.onPress}>
            <Text style={styles.linkForgot}>Forgot your Password?</Text>
        </TouchableHighlight>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    siginForm:{
      height:'40%',
    },
    signinInput:{
      width:'100%',
      borderBottomColor:'#d1d1d1',
      height:70,
      fontSize:18,
      color:'#211818',
      borderBottomWidth:2
    },
    linkForgot:{
      marginTop:10,
      color:'#0449A7',
      textDecorationLine:'underline',
      fontWeight:'bold'
    }
});


export default SigninInput;