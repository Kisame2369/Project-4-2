import axios from 'axios';
import { type Topic } from './types';

const ACCESS_KEY = 'URekufA9uOVYTWxAYJ9v_TydA7UDV47QodL71Q9eSRc';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: ACCESS_KEY,
  },
});

export const fetchImages = async (topic:string, currentPage = 1): Promise<Topic> => {
  const response = await instance.get('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
  });
  
  
  return response.data;
};