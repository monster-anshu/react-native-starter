import React, { FC } from 'react';
import SigninPage from '@pages/SigninPage';
import SignupPage from '@pages/SignupPage';
import LoginStack from '@routes/loginStack';
import type { RootTabScreenProps } from '@routes/rootTab';

type ILoginScreenProps = RootTabScreenProps<'Login'>;

const LoginScreen: FC<ILoginScreenProps> = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Signin" component={SigninPage} />
      <LoginStack.Screen name="Signup" component={SignupPage} />
    </LoginStack.Navigator>
  );
};
export default LoginScreen;
export type { ILoginScreenProps };
