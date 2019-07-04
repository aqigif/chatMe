import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, AsyncStorage} from 'react-native';
import {Container} from 'native-base'
import Logo from './components/Logo'

const axios = require('axios');


class SplashScreen extends Component{
  constructor(props) {
    super(props)
    setInterval(() => {
    this.splashScreen()}, 100);
}
  splashScreen = async () => {
      const userToken = await AsyncStorage.getItem('token');
      this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <Container>
        <View style={styles.body}>
          <Logo/>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    height:'100%',
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },
});
export default SplashScreen;