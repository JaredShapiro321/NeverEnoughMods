import axios from 'axios';

const BASE_URL = 'https://api.curseforge.com';
const API_KEY = '$2a$10$edRAoi7/Oc7m8dCh9cd4Yegv95ZrD4X2M/NNZkSxOORSlkzlTnkKO';
var config = {
  headers:{
    'x-api-key': API_KEY,
  }
};

export async function fetchProject(projectId) {
  try {
    const response = await axios.get(`${BASE_URL}/projects/${projectId}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export async function searchProjects(query) {
  try {
    const response = await axios.get(`${BASE_URL}/projects/search?search=${query}`, config);
    return response.data;
  } catch (error) {
    console.error('Error searching projects:', error);
    throw error;
  }
}

export async function getGames() {
  try {
    const response = await axios.get(`${BASE_URL}/v1/games`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}

export async function getCategories(params) {
  config.params = params;

  try {
    const response = await axios.get(`${BASE_URL}/v1/categories`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function getMods(params) {
  config.params = params;

  try {
    const response = await axios.get(`${BASE_URL}/v1/mods/search`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching mods:', error);
    throw error;
  }
}