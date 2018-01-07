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
import SignUpForm from './SignUpForm'
import SignUpLogo from './SignUpLogo'

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SignUpLogo />
        <View style={styles.loginContainer}>
          <SignUpForm />
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
  loginContainer:{
    marginBottom: 100,
  }
})
