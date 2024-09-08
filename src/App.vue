<template>
  <div id="app">
    <h1>Task Search App</h1>
    <TaskSearch />
  </div>
</template>

<script>
import TaskSearch from './components/TaskSearch.vue';

export default {
  name: 'App',
  components: {
    TaskSearch
  }
};
</script>

<style>
/* Общие стили */
body {
  font-family: 'Arial', sans-serif;
}
#app {
  text-align: center;
}
</style>
