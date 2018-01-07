import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      location: '',
      occupation: '',
    };
  }

  render() {
    return (
      <View style = {styles.container}>
      <Text style = {styles.question}>Tell us about yourself:</Text>
      <View style = {styles.input}>
       <TextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(bio) => this.setState({bio})}
         value={this.state.bio}
       />
      </View>
      <Text style = {styles.question}>What city and state are you looking to move into?</Text>
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
          onPress={() => UpdateUser.aboutMe(this.state.bio, this.state.location, this.state.occupation, this.props.user._id)}
          >
          <Text  style={styles.buttonText}>NEXT</Text>
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
    fontSize: 30,
    marginTop: 40
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
