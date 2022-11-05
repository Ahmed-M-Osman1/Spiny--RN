import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function SplashScreen() {
  
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../../assets/MarvialOpen.lottie.json')}
        autoPlay
        loop={false}
        style={styles.MarvialOpen}
        onAnimationFinish={() => navigate('HomeScreen')}
      />
    </View>
  );
}
