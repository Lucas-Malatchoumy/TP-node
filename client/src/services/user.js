import axios from "axios";
const baseURL = "http://localhost:3001";

export const checkRole = async () => {
  const response = await axios.get(`${baseURL}/user/checkRole`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${baseURL}/user/login`, data);
  localStorage.setItem("token", response.data.token);
  return;
};

export const register = async (data) => {
  const response = await axios.post(`${baseURL}/user/register`, data);
  localStorage.setItem("token", response.data.token);
  return;
};
