import { ReposState, Repository } from "../store/types";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const useSaveLocalStorage = (id: number, repos: Array<Repository>) => {
  const reposObject = repos.find((obj) => obj.id === id);
  storage.save({
    key: "gitReposFavorite",
    id: id.toString(),
    data: reposObject,
  });
};
