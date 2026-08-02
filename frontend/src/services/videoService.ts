import axios from 'axios';
import type { Video } from '../types/video';

const API_URL = 'http://127.0.0.1:8000/api';

export const getVideos = async (): Promise<Video[]> => {
  const response = await axios.get<Video[]>(`${API_URL}/videos/`);
  return response.data;
};
