import {
  useLocalSearchParams, useNavigation,
} from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function Bird() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Moro2 {id}</Text>
    </View>
  );
}
