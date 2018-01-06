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
import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
          <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
  }
})
