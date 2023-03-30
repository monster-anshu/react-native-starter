import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Expo from 'expo';
import RootTab from '@routes/rootTab';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';

function App() {
  return (
    <NavigationContainer>
      <RootTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootTab.Screen name="Home" component={HomeScreen} />
        <RootTab.Screen name="Login" component={LoginScreen} />
      </RootTab.Navigator>
    </NavigationContainer>
  );
}
export default Expo.registerRootComponent(App);
