import React from "react";
import * as S from "./styles";
import { Repository } from "../../store/types";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSaveLocalStorage } from "../../hooks/useHome";
import { useSelector } from "react-redux";
import {
  incrementCounter,
  setCounter,
} from "../../store/actions/favoritesActions";
import { useDispatch } from "react-redux";
import { selectCounter } from "../../store/selectors/favoritesSelectors";
import { SetRemoveRepos } from "../../store/actions/reposActions";

export const Card = ({
  full_name,
  description,
  language,
  owner,
  stargazers_count,
  html_url,
  id,
}: Repository) => {
  const navigation = useNavigation();
  const route = useRoute();
  const verifyScreen = route.name;

  const parts = full_name.split("/");
  const name = parts[0];
  const repo = parts[1];

  const gitRepos = useSelector((state) => state.repos);
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const handleSaveFavoritesRepos = () => {
    useSaveLocalStorage(id, gitRepos.repos.repositories);
    dispatch(SetRemoveRepos(id, gitRepos.repos.repositories));
    dispatch(setCounter(counter.favorite.counter + 1));
  };

  return (
    <S.Card
      onPress={() =>
        navigation.navigate("Detalhes", {
          full_name: full_name,
          description: description,
          language: language,
          html_url: html_url,
        })
      }
    >
      <S.header>
        <S.SplitText>
          <S.Title>{name}/</S.Title>
          <S.TitleBold>{repo}</S.TitleBold>
        </S.SplitText>
        <S.Img source={{ uri: owner.avatar_url }} />
      </S.header>
      <S.Divider />
      <S.Description numberOfLines={1}>{description}</S.Description>

      <S.Footer>
        {verifyScreen === "Repositórios" && (
          <S.Button onPress={handleSaveFavoritesRepos}>
            <Entypo name="star" size={20} color="#ffd02c" />
            <S.ButtonText>Favoritar</S.ButtonText>
          </S.Button>
        )}

        <S.Container>
          <Entypo name="star" size={20} color="#ffd02c" />
          <S.Text>{stargazers_count}</S.Text>
        </S.Container>
        <S.Container>
          <FontAwesome name="circle" size={8} color="#F22828" />
          <S.Text>{language}</S.Text>
        </S.Container>
      </S.Footer>
    </S.Card>
  );
};
