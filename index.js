/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/LoginScreen/Index';
import Home from './src/HomeScreen/Index';
import Room from './src/RoomScreen/Index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Room);
