import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Aha! I got it!</Text>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/success.png')} 
          // cover is the default value, but leaving this here to show how to change it
          resizeMode='cover'
        />
      </View>
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
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },  
  imageContainer: {
    width: 300,
    height: 300,
    // for a perfect circle, borderRadius should be half the width and height
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
