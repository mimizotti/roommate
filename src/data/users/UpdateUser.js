import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'

class UpdateUser extends Component {
  static aboutMe = (bio, location, occupation, profilePhoto, id) => {
    return fetch(`https://salty-sea-38186.herokuapp.com/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        about: bio,
        location: location,
        occupation: occupation,
        picture: profilePhoto
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      Actions.home()
    })
    .catch((error) => {
      alert(error)
    })
    .done();
  }
}

export default UpdateUser;
