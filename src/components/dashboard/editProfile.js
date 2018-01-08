import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UpdateUser from '../../data/users/UpdateUser'

export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      occupation: ''
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
      <Text style = {styles.question}>What city and state are you looking to move to?</Text>
      <View style = {styles.input}>
       <TextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(location) => this.setState({location})}
         value={this.state.location}
       />
      </View>
      <Text style = {styles.question}>What is your current occupation?</Text>
      <View style = {styles.input}>
       <TextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(occupation) => this.setState({occupation})}
         value={this.state.occupation}
       />
      </View>
       <TouchableOpacity style={styles.buttonContainer}
          onPress={() => UpdateUser.profile({location: this.state.location, occupation: this.state.occupation}, this.props.id)}
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
