import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Login from '../../../src/data/users/login'

export default class LoginForm extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = { email: '' }
    this.state = { password: '' }
  }
  render() {
    return (
      <View>
        <TextInput style = {styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholderTextColor='rgba(225,225,225,0.7)'
        />

       <TextInput style = {styles.input}
          returnKeyType="go"
          placeholder='Password'
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry
        />

       <TouchableOpacity style={styles.buttonContainer}
          onPress={() => Login.loginUser(this.state.email, this.state.password)}
          >
          <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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
    buttonContainer:{
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
