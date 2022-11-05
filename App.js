import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
import store from './src/Redux/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
}
