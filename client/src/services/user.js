import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:3001";

export const checkRole = async () => {
  const response = await axios.get(`${baseURL}/user/checkRole`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const Login = async (data) => {
  const response = await axios.post(`${baseURL}/user/login`, data);
  localStorage.setItem("token", response.data.token);
  return;
};
