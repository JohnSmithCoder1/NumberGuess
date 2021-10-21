import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('');

  const numperInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
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
            <Button title='Reset' color={Colors.accent} onPress={() => {}}/>
          </View> 
          <View style={styles.button} >
            <Button title='Confirm' color={Colors.primary} onPress={() => {}}/>
          </View>
        </View>
      </Card>
    </View>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
