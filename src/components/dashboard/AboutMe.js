import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      gender: '',
      facebook_token: '',
      facebook_id: '',
      bio: '',
      location: '',
      occupation: '',
      profilePhoto: '',
    };
  }

  componentDidMount() {
    this.getToken()
  }

  async getToken() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null){
        this.getCurrentUser(value)
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  getCurrentUser(token) {
    var self = this;
    return fetch('https://salty-sea-38186.herokuapp.com/api/auth/me', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      self.setState({
        id: responseJson._id,
        name: responseJson.name,
        gender: responseJson.gender,
        facebook_token: responseJson.facebook_token,
        facebook_id: response.facebook_id
      });
    })
    .then(() => {
      this.getFacebookPhoto()
    })
    .catch((error) => {
      alert(error)
    })
  }

  getFacebookPhoto() {
    var self = this;
    return fetch(`https://graph.facebook.com/v2.11/${this.state.facebook_id}/picture?width=400&redirect=false&type=square`, {
      headers: {
        method: 'get',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      self.setState({
        profilePhoto: responseJson.data.url
      });
    })
    .catch((error) => {
      alert(error)
    })
  }
  render() {
    alert(this.state.id)
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
            source={{uri: this.state.profilePhoto}}
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
          onPress={() => UpdateUser.aboutMe(this.state.bio, this.state.location, this.state.occupation, this.state.profilePhoto, this.props.user._id)}
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
