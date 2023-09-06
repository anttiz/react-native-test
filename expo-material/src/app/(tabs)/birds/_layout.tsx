import { Stack } from "expo-router";
import CustomAppBar from "../../../components/CustomAppBar";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Birds",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
      <Stack.Screen
        name="bird"
        options={{
          headerShown: true,
          headerTitle: "Bird details",
          header: (props) => {
            return <CustomAppBar {...props} />;
          },
        }}
      />
      <Stack.Screen
        name="add-bird-modal"
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "Add bird",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
    </Stack>
  );
}
