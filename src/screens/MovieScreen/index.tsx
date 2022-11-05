import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import apiInstance from '../../api/apiInstance';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setSearchResults } from '../../Redux/action';
import { characters } from '../../characters/characters';
import SelectedMovieCard from './components/selectedMovieCard';
import SimilarOptions from './components/similarOptions';
export default function MovieScreen({ navigation }): JSX.Element {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   apiInstance
  //     .get('marvel black widow')
  //     .then((response) => {
  //       if (response.data) {
  //         dispatch(setSearchResults(response.data.results));
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
  // const searchResults = useAppSelector(
  //   (state) => state.searchResults
  // );

  const x = [
    {
      description: '(2020) (Short)',
      id: 'tt14919778',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      resultType: 'Title',
      title: 'Marvel: Black Widow - Red by Dawn',
    },
    {
      description:
        '(2021) (Podcast Episode) - Story time with Philip and Mommy! (2020) (Podcast Series)',
      id: 'tt23240040',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      resultType: 'Title',
      title: 'Marvel Black Widow (A Little Golden Book)',
    },
    {
      description: '(2021) (Podcast Series)',
      id: 'tt16945428',
      image:
        'https://m.media-amazon.com/images/M/MV5BOGI0ODJlZjktNjYyYi00MDFkLWI5YjQtNmZmZjQxZWM0NDRkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_Ratio1.0000_AL_.jpg',
      resultType: 'Title',
      title: 'Marvel Wastelanders: Black Widow',
    },
    {
      description:
        '(2019) (TV Episode) - Season 3 | Episode 4 - The Verdict with Judge Hatchett (2016) (TV Series)',
      id: 'tt9815060',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTQ0M2UyYmQtMDU4YS00MTVjLTlkYzctMTBjZTNjZmI5NzYzXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_Ratio0.7273_AL_.jpg',
      resultType: 'Title',
      title: 'Hotel Black Widow',
    },
    {
      description:
        '(2021) (TV Episode) - WhatCulture Originals (2014) (TV Series)',
      id: 'tt15078544',
      image:
        'https://m.media-amazon.com/images/M/MV5BODI0ZDcwMjItZTNlNy00ZjQ1LWE2YzMtODM0YTgzYTI3ZTk0XkEyXkFqcGdeQXVyMjQxNzM0MjI@._V1_Ratio2.2273_AL_.jpg',
      resultType: 'Title',
      title: "Marvel's Black Widow Review",
    },
    {
      description:
        '(2021) (Podcast Episode) - Fandom Done Right (2020) (Podcast Series)',
      id: 'tt17919738',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      resultType: 'Title',
      title: 'Marvel Monthly: Black Widow, Loki 4-6',
    },
    {
      description: '(2020) (Podcast Series)',
      id: 'tt21957790',
      image: 'https://imdb-api.com/images/original/nopicture.jpg',
      resultType: 'Title',
      title: "Marvel's Black Widow: Bad Blood",
    },
    {
      description:
        '(2021) (Podcast Episode) - Marvel Wastelanders: Black Widow (2021) (Podcast Series)',
      id: 'tt17179328',
      image:
        'https://m.media-amazon.com/images/M/MV5BZTA5MTAzY2UtMzQwOS00YzA1LWIwYTYtNzQ0ZGM1OThkOGMxXkEyXkFqcGdeQXVyMTA1Mzk1NDMy._V1_Ratio1.0000_AL_.jpg',
      resultType: 'Title',
      title: "Marvel's Wastelanders: Black Widow - Teaser",
    },
    {
      description:
        '(2020) (TV Episode) - Season 11 | Episode 23 - Blind Wave (2015) (TV Series)',
      id: 'tt14294672',
      image:
        'https://m.media-amazon.com/images/M/MV5BODZkMmIyNzAtNWQ2NC00MjMyLWIwMGYtNzUzOWZjMmYzMTVmXkEyXkFqcGdeQXVyMTExMTAxNjA2._V1_Ratio1.7727_AL_.jpg',
      resultType: 'Title',
      title: "Marvel Studios' Black Widow - Big Game Spot REACTION!!",
    },
    {
      description:
        '(2018) (TV Episode) - Season 8 | Episode 5 - Artists Alley: Drawing Famous Characters (2016) (TV Series)',
      id: 'tt9896468',
      image:
        'https://m.media-amazon.com/images/M/MV5BMWE3OWM2MjQtZWE5My00NmEzLTgzOTUtZTg2MjI1NzVmZmQxXkEyXkFqcGdeQXVyOTM2ODgzNw@@._V1_Ratio0.7273_AL_.jpg',
      resultType: 'Title',
      title: "Black Widow Drawn By Marvel Studios' Andy Park",
    },
  ];
  const randomSelect = Math.random() * 10;
  console.log(Math.floor(randomSelect));
  return (
    <LinearGradient
      colors={['blue', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SelectedMovieCard
        selectedItem={x[Math.floor(randomSelect)]}
        navigation={navigation}
      />
      <Text> Similar for this Champion</Text>
      <SimilarOptions data={x} selectedCharacters={characters[0]} />
    </LinearGradient>
  );
}
