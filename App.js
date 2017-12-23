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
import Logo from './src/components/Logo'

export default class App extends Component<{}> {
  render() {
    return (
      <Logo />
    );
  }
}

