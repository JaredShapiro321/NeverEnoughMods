import { defineStore } from 'pinia';
import { getGames, getCategories, getMods as getCurseforgeMods } from '../services/curseforgeService.js';
import { getMods as getModrinthMods } from '../services/modrinthService.js'

export const useStore = defineStore('store', {
  state: () => ({
    games: null,
    categories: null,
    modrinthMods: null,
    curseforgeMods: null
  }),
  actions: {
    async fetchGames() {
      try {
        this.games = await getGames();
      } catch (error) {
        console.error('Error fetching games:', error);
      }
      console.log(this.games);
    },
    async fetchCategories(params) {
      try {
        this.categories = await getCategories(params);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
      console.log(this.categories);
    },
    async fetchCurseforgeMods(params) {
      try {
        this.curseforgeMods = await getCurseforgeMods(params);
      } catch (error) {
        console.error('Error fetching mods:', error);
      }
      console.log(this.curseforgeMods);
    },
    async fetchModrinthMods(params) {
      try {
        this.modrinthMods = await getModrinthMods(params);
      } catch (error) {
        console.error('Error fetching mods:', error);
      }
      console.log(this.modrinthMods);
    }
  },
  getters: {
    getGames: state => state.games, 
    getCategories: state => state.categories,
    getCurseforgeMods: state => state.curseforgeMods,
    getModrinthMods: state => state.modrinthMods

  }
});