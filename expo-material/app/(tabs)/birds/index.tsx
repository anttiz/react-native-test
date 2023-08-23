import { Link, router } from "expo-router";
import { List, MD3Colors } from "react-native-paper";
import uuid from "react-native-uuid";

const getNewUuid = () => uuid.v4();
const birds = [
  {
    id: getNewUuid(),
    title: "Kanahaukka",
  },
];
export default function Page() {
  return (
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
  );
}
