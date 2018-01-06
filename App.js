/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/components/welcome/Login';
import Register from './src/components/create-account/SignUp';
import HomePage from './src/components/dashboard/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Roomie" initial={true} />
          <Scene key="register" component={Register} title="Create Account" />
          <Scene key="home" component={HomePage} title="Your Profile" />
        </Scene>
      </Router>
    )
  }
}

