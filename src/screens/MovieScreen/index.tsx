import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import apiInstance from '../../api/apiInstance';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { characters } from '../../characters/characters';
import SelectedMovieCard from './components/selectedMovieCard';
import SimilarOptions from './components/similarOptions';
import Loading from '../../components/Loading.js';
import {
  setIsLoading,
  setSelectedCharacter,
  setSearchResults,
  setSelectedMovie,
} from '../../Redux/action';
import { apiKey } from '../../api/apiKey';
export default function MovieScreen({
  navigation,
  route,
}): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCharacter = useAppSelector(
    (state) => state.selectedCharacter
  );

  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setIsLoading(true));
      let searchString: string;
      if (selectedCharacter) {
        searchString = selectedCharacter.searchString;
      } else {
        const randomChampion =
          characters[generateRandomNumber(0, characters.length - 1)];
        dispatch(setSelectedCharacter(randomChampion));
        searchString = randomChampion.searchString;
      }
      await apiInstance
        .get(`/SearchTitle/${apiKey}/${searchString}`)
        .then((response) => {
          if (response.data) {
            dispatch(setSearchResults(response.data.results));
            dispatch(setIsLoading(false));
            dispatch(
              setSelectedMovie(
                response.data.results[
                  generateRandomNumber(0, searchResults.length - 1)
                ]
              )
            );
          }
        })
        .catch((e) => {
          dispatch(setIsLoading(false));
          console.log(e);
        });
    });
    return unsubscribe;
  }, []);

  const selectedMovie = useAppSelector(
    (state) => state.selectedMovie
  );

  const searchResults = useAppSelector(
    (state) => state.searchResults
  );

  const handleSelectAntherMovie = () => {
    dispatch(
      setSelectedMovie(
        searchResults[
          generateRandomNumber(0, searchResults.length - 1)
        ]
      )
    );
  };

  return (
    <LinearGradient
      colors={['blue', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Loading />
      <SelectedMovieCard
        selectedItem={
          selectedMovie || {
            title: '',
            description: '',
            id: 1,
            image: '',
          }
        }
        navigation={navigation}
      />
      <TouchableOpacity
        onPress={() => handleSelectAntherMovie()}
        style={styles.ChooseAntherRandom}
      >
        <Text style={styles.NavigateToDetailButtonText}>
          Choose anther Random Movie
        </Text>
      </TouchableOpacity>
      <Text style={styles.similarTitle}>
        {' '}
        Similar for this Champion
      </Text>
      <SimilarOptions
        data={searchResults}
        selectedCharacters={selectedCharacter}
      />
    </LinearGradient>
  );
}
