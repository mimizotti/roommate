/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';
import Logo from './src/components/welcome/Logo'
import Login from './src/components/welcome/Login'
import SignUp from './src/components/create-account/SignUp'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo />
        <Login />
        <Button
          onPress={() => navigate('CreateAccount')}
          title="Don't have an account? Sign up"
          color="#fff"
        />
      </View>
    );
  }
}

class CreateAccount extends React.Component {
  static navigationOptions = {
    title: 'Create Account',
  };
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  CreateAccount: { screen: CreateAccount },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00695c',
    marginBottom: 30,
  },
});
