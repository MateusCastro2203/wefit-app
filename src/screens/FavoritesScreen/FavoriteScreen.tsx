import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { selectRepos } from "../../store/selectors/reposSelectors";
import { storage } from "../../hooks/useHome";
import { Repository } from "../../store/types";
import { Card } from "../../components/card/Card";
import * as S from "./styles";

export const FavoriteScreen = () => {
  const localData = storage;
  const [favoritesRepos, setFavoritesRepos] = useState<Repository>();

  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    const value = localData.getAllDataForKey("gitReposFavorite");
    value.then((data) => {
      return setFavoritesRepos(data);
    });
  }, [counter]);

  return (
    <S.Container>
      {!!favoritesRepos && (
        <FlatList
          data={favoritesRepos}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              full_name={item.full_name}
              owner={item.owner}
              description={item.description}
              stargazers_count={item.stargazers_count}
              language={item.language}
              html_url={item.html_url}
            />
          )}
        />
      )}
    </S.Container>
  );
};
