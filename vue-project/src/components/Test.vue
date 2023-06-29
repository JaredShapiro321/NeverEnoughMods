<template>
    <div>HI</div>
    <div v-if="project">{{ project.name }}</div>
    <button @click="fetchMods">Fetch Mods</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import { useStore } from '../stores/store.js';

    export default defineComponent({
    setup() {
        const store = useStore();

        const fetchMods = () => {
            store.fetchMods();
        };

        return {
            mods: store.getMods,
            fetchMods,
        };
    }
    });
</script>

<style>
</style>