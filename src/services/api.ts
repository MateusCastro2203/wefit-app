import { Repository } from "../store/types";

const fetchDatas = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const fetchReposApi = async (userName: string) => {
  try {
    const url = `https://api.github.com/users/${userName}/repos`;

    const data: Repository[] = await fetchDatas(url);

    const mappedData: Repository[] = data.map((repo) => {
      const {
        full_name,
        description,
        owner,
        stargazers_count,
        language,
        html_url,
      } = repo;

      return {
        full_name,
        description,
        owner: {
          avatar_url: owner.avatar_url,
        },
        stargazers_count,
        language,
        html_url,
      };
    });
    return mappedData;
  } catch (error) {
    console.error("Error ", error); //TODO: trocar esse console por um modal mostrando que está com erro na request
    throw error;
  }
};
