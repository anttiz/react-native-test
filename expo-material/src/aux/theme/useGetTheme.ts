import { useColorScheme } from "react-native";
import lightTheme from './lightTheme.json'
import darkTheme from './darkTheme.json'

import {
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const getTheme = (isLight: boolean) => {
  return {
    ...DefaultTheme,
    colors: isLight ? lightTheme.colors : darkTheme.colors,
  };
};

export const useGetTheme = () => {
  const colorScheme = useColorScheme();

  return getTheme(colorScheme !== "light");
}
