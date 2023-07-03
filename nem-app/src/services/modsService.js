import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000
});

export async function getMods() {
  try {
      const response = await instance.get('mods');
      return response.data;
  } catch (error) {
      console.error('Error fetching mods:', error);
      throw error;
  }
}