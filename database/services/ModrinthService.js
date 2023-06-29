const axios = require('axios');

const BASE_URL = 'https://api.modrinth.com';
const SEARCH_URL = '/v2/search';

function parseParams() {
  
}


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    paramsSerializer: {
      indexes: false
    },
    headers:{
      'User-Agent': 'jaredshapiro321/NeverEnoughMods/1.0.0 (jaredshapiro321@gmail.com)'
    }
});

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

async function totalMods() {
  try {
      const response = await instance.get(`${BASE_URL}/v2/search?limit=0&facets=%5B%5B%22project_type:mod%22%5D%5D`);
      return response.data.total_hits;
  } catch (error) {
      console.error('Error fetching mods:', error);
      throw error;
  }
}

module.exports = {
  BASE_URL,
  getMods,
  totalMods
}