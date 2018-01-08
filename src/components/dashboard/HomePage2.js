import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

class HomePage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      gender: '',
      facebook_token: '',
      facebook_id: '',
      profilePhoto: '',
      about: '',
      location: '',
      occupation: ''
    }
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
        facebook_id: responseJson.facebook_id,
        about: responseJson.about,
        location: responseJson.location,
        occupation: responseJson.occupation
      });
    })
    .then(() => {
      this.getProfilePhoto()
    })
    .catch((error) => {
      alert(error)
    })
  }

  getProfilePhoto() {
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

  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.login();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  render() {
    const goToBio = () => Actions.bio({id: this.state.id, profilePhoto: this.state.profilePhoto});
    const editProfile = () => Actions.editProfile({id: this.state.id, profilePhoto: this.state.profilePhoto});
    const goToPersonalityQuestions = () => Actions.personalityQuestions({id: this.state.id})
    return(
      <View style={styles.container}>
        <Image
            style={{width: null, height: 400}}
            source={{uri: this.state.profilePhoto}}
          />
        <View style={styles.body}>
          <Text style={styles.header}>{this.state.name}</Text>
          <Text style={styles.subHeader}>{this.state.occupation}</Text>
           <View style={styles.subBody}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.about}>Bio</Text>
            <Text
              style={styles.link}
              onPress={goToBio}>(Edit)
            </Text>
            </View>
            <Text>{this.state.about}</Text>
          </View>
          <View style={styles.subBody}>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={styles.about}>I'm looking to live in {this.state.location}</Text>
              <Text
                style={styles.link}
                onPress={editProfile}>(Edit)
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainerTwo}
            onPress={goToPersonalityQuestions}>
            <Text style={styles.buttonText}>Find Your Perfect Roomie</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.userLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomePage2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  body: {
    padding: 10
  },
  subBody: {
    marginTop: 5,
  },
  header: {
    fontSize: 25,
    fontFamily: 'AvenirNext-Bold',
  },
  subHeader: {
    fontSize: 20,
    fontFamily: 'AvenirNext-Bold',
  },
  about: {
    fontSize: 18,
    fontFamily: 'AvenirNext-Bold',
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonContainer:{
    backgroundColor: '#e53935',
    paddingVertical: 15,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 4,
  },
  buttonContainerTwo:{
    backgroundColor: '#e57373',
    paddingVertical: 15,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 4,
    marginBottom: 5
  },
  link:{
    color: 'blue',
    fontSize: 10,
  }
})
