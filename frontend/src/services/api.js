import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60000,
});

export const analyzeWebsite = async (url) => {
  const response = await api.post('/analyze', { url });
  return response.data;
};
