import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Container } from "../../../components/Container";
import { AppContext } from "../../../aux/store";
import { Types } from "../../../aux/reducers/car";
import { router } from "expo-router";

export default function ModalScreen() {
  const [text, setText] = useState("");
  const { state, dispatch } = useContext(AppContext);

  const addCar = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: text,
      },
    });
  };

  return (
    <Container>
      <TextInput
        label="Car name"
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => {
          addCar();
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
