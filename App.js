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
import HomePage from './src/components/dashboard/HomePage2';
import Bio from './src/components/dashboard/UpdateBio';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Roomie" initial={true} />
          <Scene key="register" component={Register} title="Create Account" />
          <Scene key="home" component={HomePage} title="Your Profile" />
          <Scene key="bio" component={Bio} title="Update Your Bio" />
        </Scene>
      </Router>
    )
  }
}

