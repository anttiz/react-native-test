import { router } from "expo-router";
import {
  ActivityIndicator,
  List,
  MD2Colors,
  useTheme,
} from "react-native-paper";
import uuid from "react-native-uuid";
import { Container } from "../../../components/Container";
import { Types } from "../../../aux/reducers/bird";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../aux/store";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

export default function Page() {
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
      {!loading && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getBirds} />
          }
        >
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
        </ScrollView>
      )}
    </Container>
  );
}
