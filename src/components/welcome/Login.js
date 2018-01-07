import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import LoginForm from './LoginForm'
import Logo from './Logo'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
        <View style={styles.signUpContainer}>
          <Text onPress={Actions.register}>Don't have an account? Sign up!</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#00695c',
  },
  signUpContainer: {
    marginTop: 10,
    marginBottom: 100,
    alignItems: 'center',
  }
})
