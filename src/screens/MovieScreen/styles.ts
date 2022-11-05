import { StyleSheet } from 'react-native';
import {
  screenHeight,
  screenWidth,
} from '../../styles/getWidthAndHeight';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  selectedMovieCard: {
    marginTop: 45,
    backgroundColor: 'white',
    width: screenWidth,
    height: screenHeight / 2.5,
  },
  selectedCardTitle: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  selectedMoviePhoto: {
    height: screenHeight / 2.8,
    width: screenWidth / 2,
  },
  selectedMovieTitleText: {
    color: 'red',
    alignSelf: 'center',
    margin: 10,
  },
  selectedMovieDetailText: { color: 'navy', alignSelf: 'center' },
  NavigateToDetailButton: {
    backgroundColor: 'green',
    height: screenHeight / 12,
    width: screenWidth / 3,
    margin: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NavigateToDetailButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
  optionsCards: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: screenHeight / 3,
    width: screenWidth / 1.3,
    marginTop: 50,
  },
  optionsMoviePhoto: {
    height: screenHeight / 3,
    width: screenWidth / 1.3,
    borderRadius: 10,
  },
  optionsCardTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  similarTitle: {
    margin: 15,
    fontSize: 20,
    color: 'navy',
  },
});
