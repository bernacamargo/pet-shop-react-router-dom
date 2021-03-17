import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const search = async (url: string, setData: Function) => {
  const response = await api.get(url);
  setData(response.data);
};
