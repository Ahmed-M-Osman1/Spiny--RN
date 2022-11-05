import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import MovieDetailScrollView from './components/movieDetailScrollView';
import apiInstance from '../../api/apiInstance';
import Loading from '../../components/Loading';
import { useAppDispatch } from '../../Redux/hooks';
import { setSelectedMovie, setIsLoading } from '../../Redux/action';

export default function MovieDetail({ route, navigation }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setIsLoading(true));
      const { selectedItemID } = route.params;
      await apiInstance
        .get(`/Title/k_4rgq7u85/${selectedItemID}`)
        .then((response) => {
          if (response.data) {
            dispatch(setSelectedMovie(response.data));
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
