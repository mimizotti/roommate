import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import getCurrentUser from '../../data/users/me'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
  }
  componentDidMount(){
    this.getToken()
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
              name: responseJson.name
          });
    })
    .catch((error) => {
      alert(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Hello {this.state.name}!</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogout}>
          <Text style={styles.buttonText} > Log out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.3)',
        marginBottom: 10,
        marginRight: 40,
        marginLeft: 40,
        padding: 10,
        color: '#fff',
        borderRadius:10
    },
    buttonWrapper:{
        backgroundColor: '#003d33',
        paddingVertical: 15,
        borderRadius: 10,
        marginRight: 40,
        marginLeft: 40
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})
