import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
// prolongs the first render cycle with a splash screen until the task of your choice is complete e.g. the loading of assets
import AppLoading from 'expo-app-loading';

import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

// add constants/functions outside of the functional app component if they don't need to be rerendered on every rerender cycle
const fetchFonts = () => {
  return Font.loadAsync({
    // promises that need to resolve before first render cycle
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    // startAsync takes a function that's a promise
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={(error) => console.log(error)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
                <GameOverScreen 
                  numberOfRounds={guessRounds} 
                  userNumber={userNumber} 
                  onRestart={configureNewGameHandler} 
                />
              );
  }

  return (
    <View style={styles.screen}>
      <Header title='Number Guesser'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
