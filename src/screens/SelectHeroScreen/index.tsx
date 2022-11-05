import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { characters } from '../../characters/characters';

export default function SelectHeroScreen(): JSX.Element {
  return (
    <LinearGradient
      colors={['red', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={characters}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View style={styles.selectionCard}>
            <Text>{item.name}</Text>
            <View>
              <Image
                style={styles.selectionPhoto}
                source={item.photo}
                resizeMode="stretch"
              />
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
}
