import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import registerUser from '../../../src/data/users/api'
export default class SignUpForm extends Component<{}> {
  constructor(props){
    super(props);
    this.state = { firstName: ''}
    this.state = { email: ''}
    this.state = { password: ''}
  }
  render() {
    return (
      <View>

      <TextInput style = {styles.input}
               autoCapitalize="none"
               autoCorrect={false}
               keyboardType='default'
               returnKeyType="next"
               placeholder='First Name'
               onChangeText={firstName => this.setState({ firstName })}
               value={this.state.firstName}
               placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
               autoCapitalize="none"
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='Email'
               onChangeText={email => this.setState({ email })}
               value={this.state.email}
               placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
                returnKeyType="go"
                ref={(input)=> this.passwordInput = input}
                placeholder='Password'
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                placeholderTextColor='rgba(225,225,225,0.7)'
                secureTextEntry/>

      <TouchableOpacity style={styles.buttonContainer}
      onPress={() => registerUser(this.state.email, this.state.firstName, this.state.password)}
         >
                   <Text  style={styles.buttonText}>CREATE ACCOUNT</Text>
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
        borderRadius:0
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
    },
})
