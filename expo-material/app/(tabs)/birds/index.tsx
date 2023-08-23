import { router } from "expo-router";
import { List, useTheme } from "react-native-paper";
import uuid from "react-native-uuid";
import { Container } from "../../../components/Container";

const getNewUuid = () => uuid.v4();
const birds = [
  {
    id: getNewUuid(),
    title: "Kanahaukka",
  },
];
export default function Page() {
  const theme = useTheme();
  return (
    <Container>
      <List.Section>
        {birds.map(({ title, id }) => {
          return (
            <List.Item
              key={String(id)}
              title={title}
              left={() => <List.Icon icon="folder" />}
              onPress={() => router.push(`/birds/bird/${id}`)}
            />
          );
        })}
      </List.Section>
    </Container>
  );
}
