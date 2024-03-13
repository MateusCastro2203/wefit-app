import React, { useState } from "react";
import * as S from "./styles";
import { setRepos } from "../../store/actions/reposActions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const FormsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [usernameToFetch, setUsernameToFetch] = useState<string>("");

  const handleChange = (text: string) => {
    setUsernameToFetch(text);
  };

  const handleSubmit = () => {
    dispatch(setRepos(usernameToFetch));
    navigation.navigate("Repositórios");
  };

  return (
    <S.Container>
      <S.Text>Altere usuário selecionado</S.Text>
      <S.TextField onChangeText={handleChange} value={usernameToFetch} />
      <S.Button onPress={handleSubmit}>
        <S.ButtonText>SALVAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
