const axios = require('axios');

const BASE_URL = 'https://api.curseforge.com';
const SEARCH_URL = '/v1/mods/search';
const GAMES_URL = '/v1/games';
const CATEGORIES_URL = '/v1/categories';
const API_KEY = '$2a$10$edRAoi7/Oc7m8dCh9cd4Yegv95ZrD4X2M/NNZkSxOORSlkzlTnkKO';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers:{
    'x-api-key': API_KEY,
  }
});

async function totalMods(params) {
  var config = {
    params: params
  };

  try {
      const response = await instance.get(SEARCH_URL, config);
      return response.data.pagination.totalCount;
  } catch (error) {
      console.error('Error fetching mods:', error);
      throw error;
  }
}

/*
async function fetchProject(projectId) {
  try {
    const response = await instance.get(`${BASE_URL}/projects/${projectId}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

async function searchProjects(query) {
  try {
    const response = await instance.get(`${BASE_URL}/projects/search?search=${query}`, config);
    return response.data;
  } catch (error) {
    console.error('Error searching projects:', error);
    throw error;
  }
}
*/

async function getGames() {
  var config = {
    params: params
  };

  try {
    const response = await instance.get(GAMES_URL, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}

async function getCategories(params) {
  var config = {
    params: params
  };

  try {
    const response = await instance.get(CATEGORIES_URL, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

async function getMods(params) {
  var config = {
    params: params
  };

  try {
    const response = await instance.get(SEARCH_URL, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching mods:', error);
    throw error;
  }
}

module.exports = {
  BASE_URL,
  getMods,
  getCategories,
  getGames,
  totalMods
}