import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

class HomePage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      gender: '',
      facebook_token: '',
      facebook_id: '',
      profilePhoto: '',
      about: '',
      location: '',
      occupation: ''
    }
  }
  componentDidMount() {
    this.getToken()
  }

  async getToken() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null){
        this.getCurrentUser(value)
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  getCurrentUser(token) {
    var self = this;
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
      self.setState({
        id: responseJson._id,
        name: responseJson.name,
        gender: responseJson.gender,
        facebook_token: responseJson.facebook_token,
        facebook_id: responseJson.facebook_id,
        about: responseJson.about,
        location: responseJson.location,
        occupation: responseJson.occupation
      });
    })
    .then(() => {
      this.getProfilePhoto()
    })
    .catch((error) => {
      alert(error)
    })
  }

  getProfilePhoto() {
    var self = this;
    return fetch(`https://graph.facebook.com/v2.11/${this.state.facebook_id}/picture?width=400&redirect=false&type=square`, {
      headers: {
        method: 'get',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      self.setState({
        profilePhoto: responseJson.data.url
      });
    })
    .catch((error) => {
      alert(error)
    })
  }

  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.login();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Image
            style={{width: null, height: 400}}
            source={{uri: this.state.profilePhoto}}
          />
        <View style={styles.body}>
          <Text style={styles.header}>{this.state.name}</Text>
          <View style={styles.subBody}>
            <Text style={styles.about}>Bio</Text>
            {this.state.about !== '' ? (
              <Text
                style={styles.link}
                onPress={Actions.login}>Click here to update your bio.</Text>
            ) : (
              <Text>{this.state.about}</Text>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.userLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomePage2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  body: {
    padding: 10
  },
  subBody: {
    marginTop: 5,
  },
  header: {
    fontSize: 25,
    fontFamily: 'AvenirNext-Bold',
  },
  about: {
    fontSize: 18,
    fontFamily: 'AvenirNext-Bold',
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonContainer:{
    backgroundColor: '#e53935',
    paddingVertical: 15,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 4,
  },
  link:{
    color: 'blue',
  }
})
