import axios from 'axios';
import type { Hero } from '../types/hero';

const API_URL = 'http://127.0.0.1:8000/api';

export const getHero = async (): Promise<Hero> => {
  const response = await axios.get<Hero>(`${API_URL}/hero/`);
  return response.data;
};
