import { Link, router } from "expo-router";
import {
  ActivityIndicator,
  List,
  useTheme,
} from "react-native-paper";
import { Container } from "../../../components/Container";
import { StyledFab } from "../../../components/Fab/index.styling";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../aux/store";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { Types } from "../../../aux/reducers/car";
import { Pressable } from "react-native";

export default function Page() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AppContext);

  const getCars = async () => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/api/cars`;
      const response = await fetch(url);
      const json = await response.json();
      dispatch({
        type: Types.SetCars,
        payload: {
          cars: json,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (id: string) => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/api/cars/${id}`;
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
          id
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator animating={loading} />}
      {!loading && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getCars} />
          }
        >
          <List.Section>
            {state.cars.map(({ name, id }) => {
              return (
                <List.Item
                  key={id}
                  title={name}
                  left={() => <List.Icon icon="car" />}
                  right={() => (
                    <Pressable onPress={async () => await deleteCar(id)}>
                      <List.Icon icon="trash-can" color={theme.colors.error} />
                    </Pressable>
                  )}
                  onPress={() => router.push(`/car/${id}`)}
                />
              );
            })}
          </List.Section>
        </ScrollView>
      )}
      <Link href="/add-car-modal" asChild>
        <StyledFab small icon="plus" />
      </Link>
    </Container>
  );
}
