import {
  useLocalSearchParams, useNavigation,
} from "expo-router";
import { View, Text } from "react-native";

export default function Car() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Moro2 {id}</Text>
    </View>
  );
}
