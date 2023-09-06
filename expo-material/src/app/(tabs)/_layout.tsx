import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { IconButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-paper/lib/typescript/components/Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <IconButton  size={28} icon={props.name} iconColor={props.color} />
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarActiveBackgroundColor: theme.colors.primaryContainer,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarInactiveBackgroundColor: theme.colors.surface
      }}>
      <Tabs.Screen
        name="(cars)"
        options={{
          title: 'Cars',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
        }}
      />
      <Tabs.Screen
        name="birds"
        options={{
          title: 'Birds',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bird" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
