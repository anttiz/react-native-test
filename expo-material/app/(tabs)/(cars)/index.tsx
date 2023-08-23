import { router } from "expo-router";
import { List, useTheme } from "react-native-paper";
import uuid from "react-native-uuid";
import { StyleSheet, View } from "react-native";
import { Container } from "../../../components/Container";

const getNewUuid = () => uuid.v4();
const cars = [
  {
    id: getNewUuid(),
    title: "Mitsubishi",
  },
  {
    id: getNewUuid(),
    title: "Ford",
  },
  {
    id: getNewUuid(),
    title: "Toyota",
  },
];
export default function Page() {
  return (
    <Container>
      <List.Section>
        {cars.map(({ title, id }) => {
          return (
            <List.Item
              key={String(id)}
              title={title}
              left={() => <List.Icon icon="folder" />}
              onPress={() => router.push(`/car/${id}`)}
            />
          );
        })}
      </List.Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
