const loginUser = (email, password) => {
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
    alert(responseJson.token)
  })
  .catch((error) => {
    alert(error)
  })
}

module.exports = loginUser
