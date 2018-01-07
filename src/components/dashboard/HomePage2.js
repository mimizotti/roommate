import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

class HomePage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePhoto: ''
    }
  }
  componentDidMount() {
    this.getProfilePhoto()
  }

  getProfilePhoto() {
    var self = this;
    return fetch(`https://graph.facebook.com/v2.11/${this.props.user.facebook_id}/picture?width=400&redirect=false&type=square`, {
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

  userLogout() {
    Alert.alert('Logout Success!');
    Actions.login()
  }
  render() {
    return(
      <View style={styles.container}>
        <Image
            style={{width: null, height: 400}}
            source={{uri: this.state.profilePhoto}}
          />
        <View style={styles.body}>
          <Text style={styles.header}>{this.props.user.name}</Text>
          <TouchableOpacity onPress={this.userLogout}>
            <Text> Logout </Text>
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
  },
  body: {
    padding: 10
  },
  header:{
    fontSize: 25,
    fontFamily: 'Verdana-Bold',
  }
})
