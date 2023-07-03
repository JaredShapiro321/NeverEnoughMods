<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='mod in mods' :key='mod.id'>
        <td>{{ mod.id }}</td>
        <td>{{ mod.name }}</td>
        <td><a :href='mod.url' target='_blank'>{{ mod.url }}</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useModsStore } from '../stores/store';
  const store = useModsStore();

  const { mods } = storeToRefs(store);

  store.fetchMods();

  onMounted(() => {
    
  })
</script>