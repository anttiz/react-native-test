import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Container } from "../../../components/Container";
import { AppContext } from "../../../aux/store";
import { Types } from "../../../aux/reducers/bird";
import { router } from "expo-router";

export default function ModalScreen() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const addBird = async () => {
    try {
      setLoading(true);
      const url = `${process.env.EXPO_PUBLIC_API_URL}/api/birds`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text,
        }),
      });
      const json = await response.json();
      dispatch({
        type: Types.Create,
        payload: json,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TextInput
        label="Bird name"
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={async () => {
          await addBird();
          router.back();
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
