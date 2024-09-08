import { createStore } from 'vuex';
import axios from 'axios'; 

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async fetchTasks({ commit }, query) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?title_like=${query}`);
        commit('setTasks', response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
