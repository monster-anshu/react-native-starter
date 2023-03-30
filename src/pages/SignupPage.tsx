import { Button, Text, View } from 'react-native';
import React, { FC } from 'react';
import { LoginScreenProps } from '@routes/loginStack';

type ISignupPageProps = LoginScreenProps<'Signup'>;

const SignupPage: FC<ISignupPageProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Signin');
  };
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-3xl text-red-600">SignupPage</Text>
      <Button title="Signin" onPress={handlePress} />
    </View>
  );
};
export default SignupPage;
export type { ISignupPageProps };
