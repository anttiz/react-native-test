import { useContext } from "react";
import { useColorScheme } from "react-native";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import lightTheme from "./lightTheme.json";
import darkTheme from "./darkTheme.json";
import { AppContext } from "../store";

const getTheme = (isLight: boolean) => {
  return {
    ...DefaultTheme,
    colors: isLight ? lightTheme.colors : darkTheme.colors,
  };
};

export const useGetTheme = () => {
  const colorScheme = useColorScheme();
  const { state, dispatch } = useContext(AppContext);

  return getTheme(/*colorScheme !== "light"*/ !state.settings.darkMode);
};
