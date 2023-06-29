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
    },
    mounted() {
      // Fetch data when the component is mounted
      this.$store.myStore.fetchData();
    }
  };
</script>