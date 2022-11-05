import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { characters } from '../../characters/characters';

export default function MovieScreen(): JSX.Element {
  return (
    <LinearGradient
      colors={['red', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.selectionCard}>
        <Text>{characters[0].name}</Text>
        <Image resizeMode="contain" source={characters[0].photo} />
      </View>
    </LinearGradient>
  );
}
