import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class MainScreen extends React.Component {

  showInstructions() {
    console.log('instructions');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>First ReactNative App</Text>

        <Text 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Game')} >
          START
        </Text>
        <Text style={styles.button}
          onPress={() => this.props.navigation.navigate('Instructions')} >
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

class InstructionScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Instruction Screen</Text>
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
  Game: { screen: GameScreen },
  Instructions: { screen: InstructionScreen }
};
const MainNavigator = createAppContainer(createStackNavigator(NavData, { initialRouteName: 'Main' }));

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}
