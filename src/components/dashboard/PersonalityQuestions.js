import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import UpdateUser from '../../data/users/UpdateUser'
import { Dropdown } from 'react-native-material-dropdown';

export default class PersonalityQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smoke: '',
      petOwner: '',
      personality: '',
      gender: ''
    }
  }
  render() {
    let data = [{
      value: 'Yes',
    }, {
      value: 'No',
    }];
    let personalityType = [{
      value: 'Extrovert',
    }, {
      value: 'Introvert',
    }];
    let gender = [{
      value: 'Male',
    }, {
      value: 'Female',
    }];
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://i.imgur.com/no09IfK.png'}}
         style={{width: 400, height: 149, alignSelf: 'center'}} />
        <View style={styles.subContainer}>
        <Dropdown
          label='Are you a smoker?'
          data={data}
          onChangeText={(smoke) => this.setState({smoke})}
          value={this.state.smoke}
        />
        </View>
        <View style={styles.subContainer}>
          <Dropdown
            label='Do you own pets?'
            data={data}
            onChangeText={(petOwner) => this.setState({petOwner})}
            value={this.state.petOwner}
          />
        </View>
        <View style={styles.subContainer}>
          <Dropdown
            label='What is your personality type?'
            data={personalityType}
            onChangeText={(personality) => this.setState({personality})}
            value={this.state.personality}
          />
        </View>
        <View style={styles.subContainer}>
          <Dropdown
            label='What gender do you associate yourself with?'
            data={gender}
            onChangeText={(gender) => this.setState({gender})}
            value={this.state.gender}
          />
        </View>
          <TouchableOpacity
            style={styles.buttonContainerTwo}
            onPress={() => UpdateUser.lifestyle({smoker: this.state.smoke, pet_owner: this.state.petOwner, personality: this.state.personality, gender: this.state.gender}, this.props.id)}
           >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  subContainer: {
    marginTop: 20,
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
  buttonContainerTwo:{
    backgroundColor: '#ff8a80',
    paddingVertical: 15,
    borderRadius: 10,
    //marginLeft: 210,
    marginTop: 50
  },
})
