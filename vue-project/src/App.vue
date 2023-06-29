<template>
  <div>
    <h1>Table Data</h1>
    <my-table></my-table>
  </div>
</template>

<script>
  import MyTable from './components/MyTable.vue';

  export default {
    name: 'App',
    components: {
      MyTable
    }
  };
</script>