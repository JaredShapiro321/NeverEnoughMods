import { defineStore } from 'pinia';
import { getMods } from '@/services/modsService';

export const useModsStore = defineStore('mods', {
  state: () => ({
    mods: [] as any[],
    error: null as string | null,
  }),

  getters: {
    hasError: (state) => state.error !== null,
  },

  actions: {
    async fetchMods() {
      try {
        this.mods = await getMods();
        this.error = null;
      } catch (error) {
        console.error('Error fetching mods:', error);
        this.mods = [];
        this.error = 'Failed to fetch mods.';
      }
    },
  },
});