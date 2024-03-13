import React from "react";
import { Repository } from "../../store/types";
import { Linking, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as S from "./styles";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const DetailsScreen = () => {
  const route = useRoute();
  const full_name = route.params.full_name;
  const description = route.params?.description;
  const language = route.params.language;
  const html_url = route.params.html_url;

  const parts = full_name.split("/");
  const name = parts[0];
  const repo = parts[1];

  return (
    <S.View>
      <S.Container>
        <S.SplitText>
          <S.Title>{name}/</S.Title>
          <S.TitleBold>{repo}</S.TitleBold>
        </S.SplitText>
        <S.Description>{description}</S.Description>
        <S.ContainerLanguage>
          <FontAwesome name="circle" size={8} color="#F22828" />
          <S.Text>{language}</S.Text>
        </S.ContainerLanguage>
      </S.Container>
      <S.Footer>
        <S.LinkContainer
          onPress={() => {
            Linking.openURL(html_url);
          }}
        >
          <S.Link>VER REPOSITORIO</S.Link>
          <Feather name="link-2" size={20} color="#1976D2" />
        </S.LinkContainer>
        <S.Button>
          <S.ButtonText>FAVORITAR</S.ButtonText>
          <Entypo name="star" size={20} color="black" />
        </S.Button>
      </S.Footer>
    </S.View>
  );
};
