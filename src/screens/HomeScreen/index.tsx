import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

export default function HomeScreen(): JSX.Element {
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
      <View style={styles.selectionCard}>
        <TouchableOpacity onPress={() => console.log('click')}>
          <Text style={styles.selectionText}>Pick Random Movie</Text>
          {
            // This view is necessary for the lottie animation to fit inside the selection card (without it the animation will expand out side the card)
          }
          <View style={styles.selectionPhoto}>
            <Lottie
              source={require('../../../assets/QuestionmarkAnimation.lottie.json')}
              autoPlay
              loop
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.selectionCard}
        onPress={() => console.log('click')}
      >
        <Text style={styles.selectionText}>Choose Champ </Text>
        <Image
          source={require('../../../assets/The_Marvel_Universe.png')}
          style={styles.selectionPhoto}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}
