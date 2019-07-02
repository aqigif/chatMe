import React, { Component } from "react"
import { Platform,TextInput, Keyboard, TouchableHighlight } from "react-native"
import styles from "./styles"
import { } from "react-native-gesture-handler"
import { Container, Body, Text, View } from "native-base"

//Components
import Logo from "../components/Logo"
import Welcome from "./components/WelcomeText"
import SigninInput from "./components/SigninInput"
import SigninButton from "./components/SigninButton"
import SignupLink from "./components/SignupLink"
import ForgotLink from "./components/ForgotLink"
import Links from './components/Links'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
      email : "",
      password: ""
    }
  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._onFocus,
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._onBlur,
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _onFocus = () => {
    this.setState({
      isFocus: true
    })
  }
  _onBlur = () => {
    this.setState({
      isFocus: false
    })
  }
  render() {
    const onFocus = this.state.isFocus
    let welcome, forgotLink, signupLink, link

    if (onFocus == false) {
      welcome = <Welcome />
      forgotLink = <ForgotLink />
      link = <SignupLink />
    } else {
      link = <Links />
    }
    return (
      <Container>
        <View style={styles.wrapper}>
          <View style={styles.welcome}>
            <Logo />
            {welcome}
          </View>
          <View style={styles.signinForm}>
            <TextInput
              style={styles.signinInput}
              placeholder="Email or Phone Number"
              placeholderTextColor="#9B9CB4"
              onSubmitEditing={Keyboard.dismiss} 
            />
            <TextInput
              style={styles.signinInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#9B9CB4"
              onSubmitEditing={Keyboard.dismiss} 
            />
            {forgotLink}
          </View>
          <SigninButton />
          {link}
        </View>
      </Container>
    )
  }
}

export default Index
