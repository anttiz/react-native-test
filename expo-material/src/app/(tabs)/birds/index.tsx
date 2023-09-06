import { router } from "expo-router";
import { ActivityIndicator, List, MD2Colors, useTheme } from "react-native-paper";
import uuid from "react-native-uuid";
import { Container } from "../../../components/Container";
import { BirdType, Types } from "../../../aux/reducers/bird";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../aux/store";

const getNewUuid = () => uuid.v4();
/*
const birds = [
  {
    id: getNewUuid(),
    title: "Kanahaukka",
  },
];
*/

export default function Page() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  const getBirds = async () => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/api/birds`;
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: Types.SetBirds,
        payload: {
          birds: json,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBirds();
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator animating={loading} />}
      <List.Section>
        {state.birds.map(({ name, id }) => {
          return (
            <List.Item
              key={String(id)}
              title={name}
              left={() => <List.Icon icon="folder" />}
              onPress={() => router.push(`/birds/bird/${id}`)}
            />
          );
        })}
      </List.Section>
    </Container>
  );
}
