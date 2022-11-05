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
  Title: {
    fontSize: 25,
    color: 'navy',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
  MovieBanner: {
    height: 400,
    width: 300,
    marginBottom: 10,
    alignSelf: 'center',
  },
  detailText: {
    margin: 3,
    marginLeft: 15,
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'blue',
  },
  detailTextHeader: {
    color: 'red',
  },
});
