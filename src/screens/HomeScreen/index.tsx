import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['blue', 'red']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.welcomeText}>Welcome to Spiny</Text>
      <Text style={styles.introText}>
        Where you can pick a random Movie or choose a SuperHero to get
        a random movie for him.
      </Text>
      <TouchableOpacity
        style={styles.selectionCard}
        onPress={() => console.log('click')}
      >
        <Text style={styles.selectionText}>Pick Random Movie</Text>
        <View style={{ height: '100%', width: '100%' }}>
          <Lottie
            source={require('../../../assets/QuestionmarkAnimation.lottie.json')}
            autoPlay
            loop
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectionCard}
        onPress={() => console.log('click')}
      >
        <Text style={styles.selectionText}>Choose Champ </Text>
        <View style={{ height: '100%', width: '100%' }}>
          <Image
            source={require('../../../assets/The_Marvel_Universe.png')}
          />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
