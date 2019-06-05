import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  startGame() {
    console.log('start');
    alert('start');
  }

  showInstructions() {
    console.log('instructions');
    alert('instructions');
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
