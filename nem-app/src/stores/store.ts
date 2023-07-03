import { defineStore } from 'pinia';
import { getMods } from '../services/modsService';

export const useModsStore = defineStore('mods', {
  state: () => ({
    mods: null as Array<JSON> | null,
  }),
  actions: {
    async fetchMods() {
      try {
        this.mods = await getMods();
      } catch (error) {
        console.error('Error fetching mods:', error);
      }
    },
  },
});