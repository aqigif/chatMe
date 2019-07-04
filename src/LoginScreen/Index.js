import React, { Component } from "react";
import {
  Platform,
  TextInput,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import { Container, Body, Text, View } from "native-base";
import { Icon } from "react-native-elements";

//Components
import Logo from "../components/Logo";
import Welcome from "./components/WelcomeText";
import SigninInput from "./components/SigninInput";
import SigninButton from "./components/SigninButton";
import SignupLink from "./components/SignupLink";
import ForgotLink from "./components/ForgotLink";
import Links from "./components/Links";

const axios = require("axios");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      phoneNumber: "",
      password: "",
      phoneNumberFocusColor: "#d1d1d1",
      passwordFocusColor: "#d1d1d1",
      passwordHide: true
    };
  }
  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      this.props.navigation.navigate("Chat");
    }
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._onFocus
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._onBlur
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _onFocus = () => {
    this.setState({
      isFocus: true
    });
  };

  _handleLogin = async () => {
    axios
      .post("http://192.168.137.1:3333/api/auth/login", {
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      })
      .then(res => {
        console.log(res)
        const saveToken = AsyncStorage.setItem("token", res.data.token);
        if (saveToken != null) {
          this.props.navigation.navigate("App");
        }
      })
      .catch(err => {
        alert("Username or Password was Wrong!")
        console.log(err)
      });
  };

  _onBlur = () => {
    this.setState({
      isFocus: false,
      phoneNumberFocusColor: "#d1d1d1",
      passwordFocusColor: "#d1d1d1"
    });
  };
  render() {
    const onFocus = this.state.isFocus;
    let welcome, forgotLink, link, borderColor;

    if (onFocus == false) {
      welcome = <Welcome />;
      forgotLink = <ForgotLink />;
      link = <SignupLink />;
    } else {
      link = <Links />;
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
              placeholder="Phone Number"
              placeholderTextColor="#9B9CB4"
              onSubmitEditing={Keyboard.dismiss}
              onFocus={() =>
                this.setState({ phoneNumberFocusColor: "#211818" })
              }
              onBlur={() => this.setState({ phoneNumberFocusColor: "#d1d1d1" })}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />
            <View
              style={{
                height: 2,
                backgroundColor: this.state.phoneNumberFocusColor
              }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={styles.signinInput}
                secureTextEntry={this.state.passwordHide}
                placeholder="Password"
                placeholderTextColor="#9B9CB4"
                onSubmitEditing={Keyboard.dismiss}
                onFocus={() => this.setState({ passwordFocusColor: "#211818" })}
                onBlur={() => this.setState({ passwordFocusColor: "#d1d1d1" })}
                onChangeText={password => this.setState({ password })}
              />
              {this.state.password == "" ? (
                <Text />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ passwordHide: !this.state.passwordHide })
                  }
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {this.state.passwordHide ? "SHOW" : "HIDE"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                height: 2,
                backgroundColor: this.state.passwordFocusColor
              }}
            />
            {forgotLink}
          </View>
          <View style={styles.buttonSigninWrapper}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this._handleLogin}
              style={styles.buttonSignin}
            >
              <Text style={styles.buttonSigninText}>Start chat...</Text>
            </TouchableOpacity>
          </View>
          {link}
        </View>
      </Container>
    );
  }
}

export default Index;
