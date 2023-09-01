import { useTheme } from "react-native-paper";
import { StyledContainer } from "./index.styling";
import { PropsWithChildren } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Container = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <StyledContainer style={{ backgroundColor: theme.colors.surface }}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      {children}
    </StyledContainer>
  );
};
