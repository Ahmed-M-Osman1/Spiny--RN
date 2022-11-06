import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { characters } from '../../characters/characters';
import { useAppDispatch } from '../../Redux/hooks';
import { setSelectedCharacter } from '../../Redux/action';

export default function SelectHeroScreen({
  navigation,
}): JSX.Element {
  const dispatch = useAppDispatch();
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
          <TouchableOpacity
            style={styles.selectionCard}
            onPress={() => {
              dispatch(setSelectedCharacter(item));
              navigation.navigate('Movie');
            }}
          >
            <Text style={styles.optionsCardTitle}>{item.name}</Text>
            <View style={{ flex: 1 }}>
              <Image
                style={styles.selectionPhoto}
                source={item.photo}
                resizeMode="stretch"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
}
