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
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useStore } from '../stores/store.js';

export default {
  name: 'MyTable',
  setup() {
    const store = useStore();

    return {
      items: store.mods
    };
  }
};
</script>