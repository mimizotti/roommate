import { AsyncStorage } from 'react-native'

async function saveItem(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message);
  }
}

module.exports = saveItem
