import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numperInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Not so fast!', 
        'I said it had to be a number between 1 and 99.', 
        [{text: 'Alright Alright', style: 'default', onPress: resetInputHandler()}]
      );

      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You picked</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <BodyText>I won't tell. :)</BodyText>
        <View style={styles.startButtonContainer}>
          <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)} />
        </View>
      </Card>
    );
  }

  return (
    // wrap the screen in TouchableWithoutFeedback since iOS doesn't have a way to dismiss the keyboard from the keyboard like Android does
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Can you stump the Number Guesser?</Text>
        <Card style={styles.inputContainer}>
          <BodyText>Pick a number between 1 and 99.</BodyText>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            keyboardType='number-pad' 
            maxLength={2} 
            // onChangeText and value are needed to validate the input on Android since number pad has non number input
            onChangeText={numperInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button} >
              <Button 
                title='Reset' 
                color={Colors.accent} 
                onPress={resetInputHandler}
              />
            </View> 
            <View style={styles.button} >
              <Button 
                title='Confirm' 
                color={Colors.primary} 
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },  
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  startButtonContainer: {
    marginTop: 10,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    marginVertical: 10,
  },
});

export default StartGameScreen;
