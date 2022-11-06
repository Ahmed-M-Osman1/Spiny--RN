import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { characters } from '../../../characters/characters';
import { useAppSelector } from '../../../Redux/hooks';

export default function SelectedMovieCard({
  navigation,
  selectedItem,
}) {
  const selectedCharacter = useAppSelector(
    (state) => state.selectedCharacter
  );

  return (
    <View style={styles.selectedMovieCard}>
      <Text style={styles.selectedCardTitle}>Selected Movie</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', width: 200 }}>
          <Text style={styles.selectedMovieTitleText}>Title:</Text>
          <Text style={styles.selectedMovieDetailText}>
            {selectedItem.title}
          </Text>
          <Text style={styles.selectedMovieTitleText}>Details:</Text>
          <Text style={styles.selectedMovieDetailText}>
            {selectedItem.description}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MovieDetail', {
                selectedItemID: selectedItem.id,
              })
            }
            style={styles.NavigateToDetailButton}
          >
            <Text style={styles.NavigateToDetailButtonText}>
              See Movie Details
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.selectedMoviePhoto}
          source={
            selectedItem.image ==
              'https://imdb-api.com/images/original/nopicture.jpg' ||
            selectedItem.image.length < 1
              ? selectedCharacter.photo
              : { uri: selectedItem.image }
          }
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}
