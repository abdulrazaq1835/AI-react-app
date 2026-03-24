import axios from "axios";


const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : `${import.meta.env.VITE_API_URL}/api`;


const api = axios.create({
  baseURL: BASE_URL,
});




export const askAi = async (prompt) => {
  try {
    const res = await api.post("/ask-ai", { prompt });
    return res.data.answer;
  } catch (error) {
    console.error("Error in askAi:", error);
    return "Something went wrong";
  }
};


export const saveData = async (prompt, response) => {
  try {
    const res = await api.post("/save", { prompt, response });
    return res.data;
  } catch (error) {
    console.error("Error in saveData:", error);
    return null;
  }
};
