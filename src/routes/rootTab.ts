import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { LoginScreenStack } from './loginStack';
import { HomeScreenStack } from './homeStack';

export type RootTab = {
  Home: NavigatorScreenParams<HomeScreenStack>;
  Login: NavigatorScreenParams<LoginScreenStack>;
};

const RootTab = createBottomTabNavigator<RootTab>();
export default RootTab;

export type RootTabScreenProps<T extends keyof RootTab> = BottomTabScreenProps<
  RootTab,
  T
>;
