<template>
    <div>
        <h2>Search for Tasks</h2>
        <input v-model="query" @keyup.enter="fetchTasks" placeholder="Enter search term" />
        <button @click="fetchTasks">Search</button>

        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="tasks && tasks.length > 0">
            <h3>Results:</h3>
            <ul>
                <div v-for="task in tasks" :key="task.id">
                    {{ task.title }}
                </div>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
        query: "",
        tasks: [],
        error: null
    };
  },

  methods: {
    async fetchTasks() {
        this.error = null;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?title_like=${this.query}`);
            this.tasks = response.data;
        } catch (err) {
            this.error = 'Error fetching tasks. Please try again.';
        }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
input {
  margin: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>