import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles';
import ActorList from './actorList';

export default function MovieDetailScrollView({ data }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        Release Date:
        <Text style={styles.detailText}>{data.releaseDate}</Text>
      </Text>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        Story: <Text style={styles.detailText}>{data.plot}</Text>
      </Text>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        Awards: <Text style={styles.detailText}>{data.awards}</Text>
      </Text>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        Movie Genres:
        <Text style={styles.detailText}>{data.genres}</Text>
      </Text>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        IMDB Rating:
        <Text style={styles.detailText}>{data.imDbRating}</Text>
      </Text>
      <Text style={[styles.detailText, styles.detailTextHeader]}>
        IMDB No. of Votes:
        <Text style={styles.detailText}>{data.imDbRatingVotes}</Text>
      </Text>
      <ActorList actors={data.actorList} />
    </ScrollView>
  );
}
