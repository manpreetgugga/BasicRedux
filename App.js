
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Splash from "./components/Splash";
import CounterComponent from './components/CounterComponent'
import CounterDisplayValueFromStore from './components/CounterDisplayValueFromStore'
import { createStackNavigator } from '@react-navigation/stack';

import store from './Reducers/Index';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();


const App = () => (
  <Provider store={store}>
  <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={CounterComponent} />
        <Stack.Screen name="Details" component={CounterDisplayValueFromStore} />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
)

export default App
