import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { HomeScreenProps } from '@routes/homeStack';

type IPostsProps = HomeScreenProps<'Posts'>;

const Posts: FC<IPostsProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login', { screen: 'Signup' });
  };
  const handlePostDetails = () => {
    navigation.navigate('Post', { id: '1' });
  };
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-5xl">Posts</Text>
      <Text className="text-3xl text-red-600">You are not logged in</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Post Details" onPress={handlePostDetails} />
    </View>
  );
};
export default Posts;
export type { IPostsProps };
