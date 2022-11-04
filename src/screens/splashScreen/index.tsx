import { View, Text } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

export default function SplashScreen() {
  return (
    <Lottie
      source={require('../../../assets/MarvialOpen.lottie.json')}
      autoPlay
      loop={false}
      style={{ height: '100%' }}
      onAnimationFinish={() => console.log('hi')}
      //onAnimationFinish={() => navigation.navigate("Leaderboard")}
    />
  );
}
