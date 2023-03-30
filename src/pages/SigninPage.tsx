import { LoginScreenProps } from '@routes/loginStack';
import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';

type ISigninPageProps = LoginScreenProps<'Signin'>;

const SigninPage: FC<ISigninPageProps> = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handlePosts = () => {
    navigation.navigate('Home', { screen: 'Posts' });
  };
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-3xl text-red-600">SigninPage</Text>
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Posts" onPress={handlePosts} />
    </View>
  );
};
export default SigninPage;
export type { ISigninPageProps };
