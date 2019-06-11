import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class MainScreen extends React.Component {

  startGame() {
    console.log(this);
    this.props.navigation.navigate('Game');
  }

  showInstructions() {
    console.log('instructions');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>First ReactNative App</Text>

        <Text 
          style={styles.button}
          onPress={this.startGame} >
          START
        </Text>
        <Text style={styles.button}
          onPress={this.showInstructions} >
          INSTRUCTIONS
        </Text>
      </View>
    );
  }
}

class GameScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Screen</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5
  }
});

const NavData = {
  Main: { screen: MainScreen },
  Game: { screen: GameScreen }
};
const MainNavigator = createAppContainer(createStackNavigator(NavData, { initialRouteName: 'Main' }));

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}
