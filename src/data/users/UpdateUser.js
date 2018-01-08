import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'

class UpdateUser extends Component {
  static profile = (data, id) => {
    return fetch('https://salty-sea-38186.herokuapp.com/users/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Data': JSON.stringify(data)
        },
      })
    .then((incoming) => incoming.json())
    .then((response) => {
      alert("Your profile is now up-to-date!")
      Actions.home()
    })
    .catch((error) => {
      alert(error)
    })
    .done();
  }
}


export default UpdateUser;
