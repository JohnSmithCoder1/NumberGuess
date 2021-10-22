import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Aha! I got it!</Text>
      <Text>Your number is {props.userNumber}.</Text>
      <Text>It only took me {props.numberOfRounds} guesses!</Text>
      <View style={styles.buttonContainer} >
        <Button title="Try Again?" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
