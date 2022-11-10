import axios from "axios";
const baseURL = "http://localhost:3001";

export const checkRole = async () => {
  const response = await axios.get(`${baseURL}/user/checkRole`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  console.log(response);
  return response.data;
};

export const CreatePost = async (data) => {
  return await axios.post(`${baseURL}/posts`, data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const getPosts = async () => {
  const response = await axios.get(`${baseURL}/posts`);
  return response.data;
};
