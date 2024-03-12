import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRepos,
  selectError,
  selectLoading,
} from "../../store/selectors/reposSelectors";

import { View } from "react-native";
import { getRepos } from "../../store/actions/reposActions";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  //   const loading = useSelector(selectLoading);
  //   const error = useSelector(selectError);
  useEffect(() => {
    const usernameToFetch = "MateusCastro2203";
    const value = getRepos(usernameToFetch);

    console.log("OIUII", value);
  }, [dispatch]);

  //const gitRepos = useSelector(selectRepos);

  const userNameToFetch = ""; // trocar para passar o nome do usuario que será insierido

  return <View></View>;
};
