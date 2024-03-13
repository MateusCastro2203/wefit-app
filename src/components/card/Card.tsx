import React from "react";
import * as S from "./styles";
import { Repository } from "../../store/types";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export const Card = ({
  full_name,
  description,
  language,
  owner,
  stargazers_count,
  html_url,
}: Repository) => {
  const navigation = useNavigation();
  const parts = full_name.split("/");
  const name = parts[0];
  const repo = parts[1];
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
        <S.Button>
          <Entypo name="star" size={20} color="#ffd02c" />
          <S.ButtonText>Favoritar</S.ButtonText>
        </S.Button>
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
