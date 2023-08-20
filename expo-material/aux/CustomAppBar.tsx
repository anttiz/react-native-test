import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomAppBar({back, navigation, options, route}: NativeStackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}