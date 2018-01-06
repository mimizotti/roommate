import { AsyncStorage } from 'react-native'
import React, { Component } from 'react';
import saveItem from '../../helpers/async'
import {Actions} from 'react-native-router-flux'
class Login extends Component {

  static loginUser = (email, password) => {
    return fetch('https://salty-sea-38186.herokuapp.com/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      saveItem('id_token', responseJson.token),
      Actions.home
    })
    .catch((error) => {
      alert(error)
    })
    .done();
  }
}

export default Login;
