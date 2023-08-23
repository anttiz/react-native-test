import { Slot, Stack } from "expo-router";
import CustomAppBar from "../../../components/CustomAppBar";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Cars",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
      <Stack.Screen
        name="car"
        options={{
          headerShown: true,
          headerTitle: "Car details",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
    </Stack>
  );
}
