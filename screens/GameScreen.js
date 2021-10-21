import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  
  return (
    <View style={styles.screen}>
      <Text>Is this your number?</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
    <Card style={styles.buttonContainer}>
      <Button title='Lower' onPress={() => {}} />
      <Button title='Higher' onPress={() => {}} />
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default GameScreen;
