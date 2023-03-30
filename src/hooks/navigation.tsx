// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Routes } from '@routes/main';

export const useAppNavigation = () => useNavigation<NavigationProp<Routes>>();
