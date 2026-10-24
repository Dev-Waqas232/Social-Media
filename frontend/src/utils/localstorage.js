const AUTH_KEY = "auth_token";

export const getToken = () => {
  return localStorage.getItem(AUTH_KEY);
};

export const setToken = (token) => {
  return localStorage.setItem(AUTH_KEY, token);
};

export const removeToken = () => {
  return localStorage.removeItem(AUTH_KEY);
};
