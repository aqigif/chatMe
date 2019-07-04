import React from "react";
import { Button, View, Text,TouchableOpacity, AsyncStorage} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation"; 
import LoginScreen from "./LoginScreen/Index";
import HomeScreen from "./HomeScreen/Index";
import RoomScreen from "./RoomScreen/Index";
import SplashScreen from "./SplashScreen";
import LogoTitle from './components/LogoTitle'

const AppStack = createStackNavigator(
  {
    Home:{screen: HomeScreen},
    Room:{screen:RoomScreen} 
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { gesturesEnabled: false, header: null }
    }
  },
  {
    defaultNavigationOptions: {
      header: null,
      resetOnBlur: false
    }
  }
);

const AppContainer = createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "AuthLoading",
    resetOnBlur: true
  }
);


handleLogout = async () => {
  try {
    const token = await AsyncStorage.removeItem("token")
    console.log(token);
    if (token == null) {
      this.props.navigation.navigate("Login");
    }
  } catch (error) {
    console.error(error);
  }
};

export default createAppContainer(AppContainer);
