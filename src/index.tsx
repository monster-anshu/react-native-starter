import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Expo from 'expo';
import RootTab from '@routes/rootTab';
import HomeStack from '@routes/homeStack';
import Posts from '@pages/Posts';
import Post from '@pages/Post';
import LoginStack from '@routes/loginStack';
import SigninPage from '@pages/SigninPage';
import SignupPage from '@pages/SignupPage';

function App() {
  return (
    <NavigationContainer>
      <RootTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootTab.Screen
          name="Home"
          component={() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Posts" component={Posts} />
              <HomeStack.Screen name="Post" component={Post} />
            </HomeStack.Navigator>
          )}
        />
        <RootTab.Screen
          name="Login"
          component={() => (
            <LoginStack.Navigator>
              <LoginStack.Screen name="Signin" component={SigninPage} />
              <LoginStack.Screen name="Signup" component={SignupPage} />
            </LoginStack.Navigator>
          )}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
}
export default Expo.registerRootComponent(App);
