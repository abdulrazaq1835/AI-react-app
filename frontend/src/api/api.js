import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

export const askAi = async (prompt) => {
  const res = await axios.post(`${BASE_URL}/ask-ai`, { prompt })
  return res.data.answer
}

export const saveData = async (prompt, response) => {
  const res = await axios.post(`${BASE_URL}/save`, { prompt, response })
  return res.data
}

export const getHistory = async () => {
  const res = await axios.get(`${BASE_URL}/history`)
  return res.data
}