import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';
import LoginScreen from './../screens/auth/LoginScreen';

const AppNavigator  = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  },
  Signup: {
    screen: SignupScreen
  },
  MainTabNavigator: {
    screen: MainTabNavigator
  },

});

const AppContainer  = createAppContainer(AppNavigator);

export default AppContainer;
