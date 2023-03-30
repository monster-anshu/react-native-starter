import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootTabScreenProps } from './rootTab';

export type HomeScreenStack = {
  Posts: undefined;
  Post: { id: string };
};

const HomeStack = createNativeStackNavigator<HomeScreenStack>();
export default HomeStack;

export type HomeScreenProps<T extends keyof HomeScreenStack> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeScreenStack, T>,
    RootTabScreenProps<'Home'>
  >;
