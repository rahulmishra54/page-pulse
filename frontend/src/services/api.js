import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 12000,
});

export const analyzeWebsite = async (url) => {
  const response = await api.post('/analyze', { url });
  return response.data;
};
