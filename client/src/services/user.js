import axios from "axios";
const baseURL = "http://localhost:3001";

export const getUsers = async () => {
  const response = await axios.get("https://reeplay.online/Reeplay/user/get");
  return response.data;
};

export const Login = async (data) => {
  const response = await axios.post(`${baseURL}/user/login`, data);
  localStorage.setItem("token", response.data.token);
  return;
};
