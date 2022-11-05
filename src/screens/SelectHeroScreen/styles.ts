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
  welcomeText: {
    fontSize: 35,
    color: 'white',
  },
  introText: {
    fontSize: 15,
    color: 'white',
    margin: 3,
  },
  selectionCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: screenHeight / 3,
    width: screenWidth / 1.5,
    marginTop: 50,
  },
  selectionPhoto: {
    height: screenHeight / 3,
    width: screenWidth / 1.5,
  },
  selectionText: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
