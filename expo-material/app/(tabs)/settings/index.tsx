import { StyleSheet, View, Text } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { useTheme } from 'react-native-paper';

export default function SettingsScreen() {
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.surface}]}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} />
      {/*<EditScreenInfo path="app/(tabs)/settings/index.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
