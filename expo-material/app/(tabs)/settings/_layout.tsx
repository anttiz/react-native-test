import { Slot, Stack } from "expo-router";
import CustomAppBar from "../../../components/CustomAppBar";

export default function Layout() {
  return <Slot />;
  /*
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Settings",
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
    </Stack>
  );
  */
}
