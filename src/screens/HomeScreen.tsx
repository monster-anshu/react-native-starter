import React, { FC } from 'react';
import Post from '@pages/Post';
import Posts from '@pages/Posts';
import type { RootTabScreenProps } from '@routes/rootTab';
import HomeStack from '@routes/homeStack';
type IHomeScreenProps = RootTabScreenProps<'Home'>;

const HomeScreen: FC<IHomeScreenProps> = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Posts" component={Posts} />
      <HomeStack.Screen name="Post" component={Post} />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
export type { IHomeScreenProps };
