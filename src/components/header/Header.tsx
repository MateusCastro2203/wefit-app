import React from "react";

import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Text>WeFit</S.Text>
      <S.Button onPress={() => navigation.navigate("Formulario")}>
        <Ionicons name="settings-sharp" size={24} color="black" />
      </S.Button>
    </S.Container>
  );
};
