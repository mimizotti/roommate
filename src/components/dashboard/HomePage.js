import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native'
const async = require('../../helpers/async')

class HomePage extends Component {

  getProtectedQuote() {
    Alert.alert('We will print a Chuck Norris quote')
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
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.buttonWrapper} onPress={this.getProtectedQuote}>
          <Text style={styles.buttonText}> Get Chuck Norris quote! </Text>
        </TouchableOpacity>

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
