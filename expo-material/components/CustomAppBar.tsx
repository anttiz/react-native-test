import { Appbar, useTheme } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { getHeaderTitle } from "@react-navigation/elements";

export default function CustomAppBar({
  back,
  navigation,
  options,
  route,
}: NativeStackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  const theme = useTheme();
  return (
    <Appbar.Header dark={theme.dark}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
