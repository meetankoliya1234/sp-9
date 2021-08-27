import React from 'react';
import * as firebase from "firebase"
;import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator';
import { createSwitchNavigator, createAppNavigator } from "react-navigation";

import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import DashboardScreen from "./screens/DashboardScreen"

if(!firebaseConfig.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  );
}