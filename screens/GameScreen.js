import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

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

  const [rounds, setRounds] = useState(0);

  // useRef allows you to define a value that survives component rerenders
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  // useEffect allows you to run logic after every render cycle (and does so by default)
  // if you specify dependencies as the second argument to useEffect, it will only trigger when a dependency changes
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {

    if (
      (direction === 'lower' && currentGuess < props.userChoice) || 
      (direction === 'higher' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Lie Detected', "Hey! That's not fair!", [
        { text: 'Sorry :(', style: 'cancel' }
      ]);

      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };
  
  return (
    <View style={styles.screen}>
      <Text>Is this your number?</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
    <Card style={styles.buttonContainer}>
      <Button title='Lower' onPress={nextGuessHandler.bind(this, 'lower')} />
      <Button title='Higher' onPress={nextGuessHandler.bind(this, 'higher')} />
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
