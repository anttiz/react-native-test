import { List, MD3Colors } from "react-native-paper";

export default function Page() {
  return (
    <List.Section>
      <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
      <List.Item
        title="Second Item"
        left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
      />
    </List.Section>
  );
}
