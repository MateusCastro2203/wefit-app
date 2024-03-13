import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRepos,
  selectError,
  selectLoading,
} from "../../store/selectors/reposSelectors";
import { FlatList, View } from "react-native";
import { setRepos } from "../../store/actions/reposActions";
import * as S from "./styles";
import { Card } from "../../components/card/Card";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  //   const error = useSelector(selectError);

  useEffect(() => {
    const usernameToFetch = "MateusCastro2203";
    dispatch(setRepos(usernameToFetch));
  }, [dispatch]);

  const gitRepos = useSelector(selectRepos);
  const repositories = gitRepos ? gitRepos.repositories : [];

  return (
    <S.ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={repositories}
        renderItem={({ item }) => (
          <Card
            full_name={item.full_name}
            owner={item.owner}
            description={item.description}
            stargazers_count={item.stargazers_count}
            language={item.language}
            html_url={item.html_url}
          />
        )}
      />
    </S.ScrollView>
  );
};
