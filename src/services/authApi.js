import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchRegister = (credentials) => {
  return axios.post("/users/signup", credentials);
};

export const fetchlogIn = (credentials) => {
  return axios.post("/users/login", credentials);
};

export const fetchlogOut = () => {
  return axios.post("/users/logout");
};

export const fetchCurrentAuth = () => {
  return axios.get("/users/current");
};
