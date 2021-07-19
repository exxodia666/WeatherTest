import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import MyTabs from './src/navigation/BottomTabNavigator';
import { store } from './src/redux';
import { Provider } from 'react-redux';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>

  );
};
export default App;