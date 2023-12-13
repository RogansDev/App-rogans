import axios from 'axios';
import { CALENDLY_TOKEN } from '@env';

const calendlyApi = axios.create({
  baseURL: 'https://api.calendly.com/',
  headers: {
    Authorization: `Bearer ${CALENDLY_TOKEN}`
  }
});

export const getEventTypes = async () => {
  try {
    const response = await calendlyApi.get('/event_types/user/me');
    return response.data;
  } catch (error) {
    console.error('Error en getEventTypes:', error);
    throw error;
  }
};