const axios = require('axios');

const BASE_URL = 'https://api.modrinth.com';
const SEARCH_URL = '/v2/search';

// Custom paramsSerializer function
const paramsSerializer = (params) => {
  const serializedParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      serializedParams.append(key, JSON.stringify(value));
    } else {
      serializedParams.append(key, value);
    }
  });

  return serializedParams.toString();
};

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    paramsSerializer: paramsSerializer,
    headers:{
      'User-Agent': 'jaredshapiro321/NeverEnoughMods/1.0.0 (jaredshapiro321@gmail.com)'
    }
});

async function getUri(params) {
  var config = {
    url: SEARCH_URL,
    params: params
  };
  
  try {
      const response = await instance.getUri(config);
      return response;
  } catch (error) {
      console.error('Error fetching mods:', error);
      throw error;
  }
}


async function getMods(params) {
    var config = {
      params: params
    };
    
    try {
        const response = await instance.get(SEARCH_URL, config);
        console.log(response);

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
  getUri,
  totalMods
}