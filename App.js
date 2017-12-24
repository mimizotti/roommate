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
  TextInput
} from 'react-native';
import Logo from './src/components/welcome/Logo'
import Login from './src/components/welcome/Login'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#00695c',
  },
});
