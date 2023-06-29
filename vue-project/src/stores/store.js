import { defineStore } from 'pinia';
import { getMods } from '../services/modsService.js'

export const useModsStore = defineStore('mods', {
  state: () => ({
    mods: null
  }),
  actions: {
    async fetchMods(params) {
      try {
        this.mods = await getMods(params);
      } catch (error) {
        console.error('Error fetching mods:', error);
      }
    }
  }
});