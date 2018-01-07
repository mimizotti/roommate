import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

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
      <Text style={styles.header}>Hello, {this.state.name}</Text>
        <TouchableOpacity onPress={this.userLogout}>
          <Text> Logout </Text>
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
    header:{
      fontSize: 25,
      fontFamily: 'Verdana-Bold'
    }
})
