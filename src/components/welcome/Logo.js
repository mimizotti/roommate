import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://i.imgur.com/aKOBv5D.png'}}
         style={{width: 300, height: 300, alignSelf: 'center'}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0bb791',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
