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

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <SignUpForm />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginBottom: 30
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  }
  //logo: {
      //position: 'absolute',
      //width: 300,
      //height: 100
  //}
})
