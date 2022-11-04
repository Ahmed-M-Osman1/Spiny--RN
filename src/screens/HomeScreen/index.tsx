import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['blue', 'red', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={{ fontSize: 30 }}>Welcome to Spiny</Text>
      <TouchableOpacity
        style={{
          padding: 9,
          backgroundColor: 'green',
          borderRadius: 10,
          marginBottom: 5,
        }}
        onPress={() => console.log('click')}
      >
        <Text>choose Champ </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
