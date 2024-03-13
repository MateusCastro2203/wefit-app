import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectRepos } from "../../store/selectors/reposSelectors";

export const FavoriteScreen = () => {
  const gitRepos = useSelector(selectRepos);
  useEffect(() => {}, []);

  return <View></View>;
};
