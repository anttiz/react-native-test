import { Link, router } from "expo-router";
import { List } from "react-native-paper";
import { Container } from "../../../components/Container";
import { StyledFab } from "../../../components/Fab/index.styling";
import { useContext, useState } from "react";
import { AppContext } from "../../../aux/store";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  return (
    <Container>
      <List.Section>
        {state.cars.map(({ name, id }) => {
          return (
            <List.Item
              key={String(id)}
              title={name}
              left={() => <List.Icon icon="folder" />}
              onPress={() => router.push(`/car/${id}`)}
            />
          );
        })}
      </List.Section>
      <Link href="/add-car-modal" asChild>
        <StyledFab small icon="plus" />
      </Link>
    </Container>
  );
}
