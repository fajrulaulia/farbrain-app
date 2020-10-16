import React from 'react';
import GameScreens from './src/screens/game'
import {
  StyleSheet, View
} from 'react-native';


const App = () => {
  return (
    <View style={styles.Background}>
      <GameScreens />
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: '#d6ffe8',
    flex: 1,
    resizeMode: 'cover',
  },
});



export default App;
