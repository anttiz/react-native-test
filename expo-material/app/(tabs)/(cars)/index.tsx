import { Link, router } from "expo-router";
import { List, Portal, Modal } from "react-native-paper";
import uuid from "react-native-uuid";
import { StyleSheet } from "react-native";
import { Container } from "../../../components/Container";
import { StyledFab } from "../../../components/Fab/index.styling";
import { useState } from "react";

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
  const [modalVisible, setModalVisible] = useState(false);
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
      <Link href="/add-car-modal" asChild>
        <StyledFab small icon="plus" onPress={() => console.log("Hello")} />
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
