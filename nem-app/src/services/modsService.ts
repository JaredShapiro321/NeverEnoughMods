import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
const BASE_URL = 'http://localhost:3000/';

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000
});

export async function getMods(): Promise<any[]>  {
  try {
      const response: AxiosResponse<any[]> = await instance.get('mods');
      return response.data;
  } catch (error) {
      console.error('Error fetching mods:', error);
      throw error;
  }
}