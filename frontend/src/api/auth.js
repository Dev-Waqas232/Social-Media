import { api } from "./lib";

export const register = async (data) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};
