<template>
    <div>HI</div>
    <div v-if="project">{{ project.name }}</div>
    <button @click="fetchGames">Fetch Games</button>
    <button @click="fetchCategories">Fetch Categories</button>
    <button @click="fetchCurseforgeMods">Fetch Curseforge Mods</button>
    <button @click="fetchModrinthMods">Fetch Modrinth Mods</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import { useStore } from '../stores/store.js';

    export default defineComponent({
    setup() {
        const store = useStore();
        
        const fetchGames = () => {
            store.fetchGames();
        };

        const fetchCategories = () => {
            var params = { gameId: 432 }
            store.fetchCategories(params);
        };

        const fetchCurseforgeMods = () => {
            var params = { gameId: 432, classId: 6, sortField: 3, sortOrder: 'desc'};
            store.fetchCurseforgeMods(params);
        };

        const fetchModrinthMods = () => {
            var params = { facets:[["project_type:mod"]], index: "updated", limit: 50};
            store.fetchModrinthMods(params);
        };

        return {
            games: store.fetchGames,
            categories: store.getCategories,
            mods: store.getMods,
            fetchGames,
            fetchCategories,
            fetchCurseforgeMods,
            fetchModrinthMods,
        };
    }
    });
</script>

<style>
</style>