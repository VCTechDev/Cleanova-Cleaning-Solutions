import axios from 'axios';
import type { Statistic } from '../types/statistic';

const API_URL = 'http://127.0.0.1:8000/api';

export const getStatistics = async (): Promise<Statistic[]> => {
  const response = await axios.get<Statistic[]>(`${API_URL}/statistics/`);
  return response.data;
};
