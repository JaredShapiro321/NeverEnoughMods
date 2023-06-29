import axios from 'axios';

const BASE_URL = 'https://api.modrinth.com';
var config = {
  headers:{
  //  'User-Agent': 'jaredshapiro321/VueTest/1.0.0 (jaredshapiro321@gmail.com)'
  }
};

const instance = axios.create({
    baseURL: 'https://api.modrinth.com/',
    timeout: 1000,
    paramsSerializer: function(params) {
        var result = '';
        // Build the query string 
        params = 0;
        
        return result;
    }
    //headers: {'X-Custom-Header': 'foobar'}
});

export async function getMods(params) {
    //config.params = params;
    try {
        const response = await axios.get(`${BASE_URL}/v2/search?limit=50&index=updated&facets=%5B%5B%22project_type:mod%22%5D%5D`);//, config);
        return response.data;
    } catch (error) {
        console.error('Error fetching mods:', error);
        throw error;
    }
}