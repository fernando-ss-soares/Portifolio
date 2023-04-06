import api from "..";

export default async function repositoriesAPI() : Promise<Array<object>> {
  const { data } = await api.get(`/users/${import.meta.env.VITE_USER_GIT}/repos`);
  return data;
}
