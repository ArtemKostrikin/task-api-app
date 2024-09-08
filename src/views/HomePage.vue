<template>
    <div>
      <h1>Home Page</h1>
      <TaskSearch />
    </div>
  </template>
  
  <script>
  import TaskSearch from '@/components/TaskSearch.vue';
  
  export default {
    name: 'HomePage',
    components: {
      TaskSearch
    }
  };
  </script>
  
  <style>
  /* Стили для домашней страницы */
  h1 {
    margin-bottom: 20px;
  }
  </style>
  