import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UpdateUser from '../../data/users/UpdateUser'

export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: ''
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <Image
            style={{
              alignSelf: 'center',
              height: 175,
              width: 175,
              borderRadius: 86,
              marginTop: 10
            }}
            source={{uri: this.props.profilePhoto}}
              resizeMode="cover"
          />
      <Text style = {styles.question}>Tell us about yourself:</Text>
      <View style = {styles.input}>
       <TextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(bio) => this.setState({bio})}
         value={this.state.bio}
       />
      </View>
       <TouchableOpacity style={styles.buttonContainer}
          onPress={() => UpdateUser.profile({about: this.state.bio, picture: this.props.profilePhoto}, this.props.id)}
          >
          <Text  style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 20
  },
  input: {
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonContainer:{
    backgroundColor: '#003d33',
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 210,
    marginTop: 20
  },
})
