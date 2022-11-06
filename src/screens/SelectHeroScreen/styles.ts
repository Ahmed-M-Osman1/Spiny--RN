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
  selectionCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: screenHeight / 3,
    width: screenWidth / 1.3,
    marginTop: 50,
  },
  selectionPhoto: {
    height: screenHeight / 3.3,
    width: screenWidth / 1.5,
    alignSelf: 'flex-end',
  },
  optionsCardTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
