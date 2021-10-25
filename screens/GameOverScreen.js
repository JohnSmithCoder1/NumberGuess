import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Aha! I got it!</Text>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={{uri: 'https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/1:1/w_1329,h_1329,c_limit/Culture-Success-Meme-Kid.jpg'}}
          // source={require('../assets/success.png')} 
          // cover is the default value, but leaving this here to show how to change it
          resizeMode='cover'
        />
      </View>
      <BodyText style={styles.resultsText}>Your number is <Text style={styles.highlight}>{props.userNumber}</Text>. It only took me <Text style={styles.highlight}>{props.numberOfRounds}</Text> guesses!</BodyText>
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
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
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
  resultsText: {
    fontSize: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
