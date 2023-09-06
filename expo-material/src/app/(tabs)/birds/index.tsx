import { Link, router } from "expo-router";
import { ActivityIndicator, List, useTheme } from "react-native-paper";
import { Container } from "../../../components/Container";
import { Types } from "../../../aux/reducers/bird";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../aux/store";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { StyledFab } from "../../../components/Fab/index.styling";

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

  const deleteBird = async (id: string) => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/api/birds/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      dispatch({
        type: Types.Delete,
        payload: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
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
                  left={() => <List.Icon icon="bird" />}
                  right={() => (
                    <Pressable onPress={async () => await deleteBird(id)}>
                      <List.Icon icon="trash-can" color={theme.colors.error} />
                    </Pressable>
                  )}
                  onPress={() => router.push(`/birds/bird/${id}`)}
                />
              );
            })}
          </List.Section>
        </ScrollView>
      )}
      <Link href="/birds/add-bird-modal" asChild>
        <StyledFab small icon="plus" />
      </Link>
    </Container>
  );
}
