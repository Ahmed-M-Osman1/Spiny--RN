import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import MovieDetailScrollView from './components/movieDetailScrollView';
import apiInstance from '../../api/apiInstance';
import Loading from '../../components/Loading';
import { useAppDispatch } from '../../Redux/hooks';
import {
  setIsLoading,
  setSelectedMovieDetail,
} from '../../Redux/action';
import { apiKey } from '../../api/apiKey';

export default function MovieDetail({ route, navigation }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setIsLoading(true));
      const { selectedItemID } = route.params;
      await apiInstance
        .get(`/Title/${apiKey}/${selectedItemID}`)
        .then((response) => {
          if (response.data) {
            dispatch(setSelectedMovieDetail(response.data));
            dispatch(setIsLoading(false));
          }
        })
        .catch((e) => {
          console.log(e);
          dispatch(setIsLoading(false));
        });
    });
    return unsubscribe;
  }, []);
  return (
    <LinearGradient
      colors={['gold', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Loading />
      <MovieDetailScrollView />
    </LinearGradient>
  );
}
