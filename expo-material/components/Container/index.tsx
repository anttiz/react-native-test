import { PaperProvider, useTheme } from "react-native-paper";
import { StyledContainer } from "./index.styling";
import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <PaperProvider theme={theme}>
      <StyledContainer style={{ backgroundColor: theme.colors.surface }}>
        {children}
      </StyledContainer>
    </PaperProvider>
  );
};
