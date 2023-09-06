import { Link, router } from "expo-router";
import { ActivityIndicator, List } from "react-native-paper";
import { Container } from "../../../components/Container";
import { StyledFab } from "../../../components/Fab/index.styling";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../aux/store";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { Types } from "../../../aux/reducers/car";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
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
                  key={String(id)}
                  title={name}
                  left={() => <List.Icon icon="car" />}
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
