<img src="https://i.imgur.com/GrEJpeI.png">

# Roomie

Roomie is a social search mobile app that allows you to find a roommate. Users can create an account, log in, answer a series of personality/lifestyle questions, and see a list of compatible matches.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

You need Node, Watchman, the React CLI, and Xcode.

```
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
```

### Installing

1. Clone the repo and change into the roommate directory:

```
$ git clone https://github.com/mimilettd/roommate.git
$ cd roommate
```

2. Install the dependencies:

```
$ npm install
```

3. To start the app in development, you will need either one of the following:

<a href="https://expo.io/"><b>Expo</b></a> client app on your iOS or Android phone - this will allow you to connect to the same wireless network as your computer. When you enter `npm start` in the terminal, a QR code will print. Using the Expo app, scan the QR code from your terminal to open this project.

<b>Xcode</b>, which will automatically provide you the Simulator app. You can run `react-native run-ios` inside the project directory. If everything is set up correctly, you should see this project running in the iOS Simulator shortly.

## Built With

  * JavaScript (language)
  * React Native (framework)
  
## Note

This application is currently hitting <a href="https://salty-sea-38186.herokuapp.com/"><b>https://salty-sea-38186.herokuapp.com/</b></a>. Visit the <a href="https://github.com/mimilettd/roommate_api"><b>RoomieAPI</b></a> here.

## Contributing

Please read <a href="https://gist.github.com/PurpleBooth/b24679402957c63ec426"><b>CONTRIBUTING.md</b></a> for details on my code of conduct, and the process for submitting pull requests to me.
