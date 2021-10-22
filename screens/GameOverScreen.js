import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>Aha! I got it!</BodyText>
      <BodyText>Your number is {props.userNumber}.</BodyText>
      <BodyText>It only took me {props.numberOfRounds} guesses!</BodyText>
      <View style={styles.buttonContainer} >
        <Button title="Try Again" onPress={props.onRestart} />
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
