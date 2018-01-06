import {Actions} from 'react-native-router-flux';

const getCurrentUser = (token) => {
  return fetch('https://salty-sea-38186.herokuapp.com/api/auth/me', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.name
  })
  .catch((error) => {
    alert(error)
  })
}

module.exports = getCurrentUser
