import { Stack } from "expo-router";
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
      <Stack.Screen
        name="add-car-modal"
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "Add car",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
    </Stack>
  );
}
