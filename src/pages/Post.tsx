import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { HomeScreenProps } from '@routes/homeStack';

type IPostProps = HomeScreenProps<'Post'>;
const Post: FC<IPostProps> = ({ navigation, route }) => {
  const { params } = route;
  const { id } = params;
  const handlePress = () => {
    navigation.navigate('Posts');
  };
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-red-600">Posts : {id}</Text>
      <Button title="All Posts" onPress={handlePress} />
    </View>
  );
};
export default Post;
export type { IPostProps };
