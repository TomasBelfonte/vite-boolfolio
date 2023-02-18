<script>
import TheHeader from './components/TheHeader.vue';
import axios from "axios";

export default {
    components: { TheHeader },

    data() {
        return {
          projects: [],
        };
    },
  
    methods: {
      fetchProjects() {
        axios.get("http://127.0.0.1:8000/api/projects")
      }
    },

    mounted() {
      this.fetchProjects();
    }
};
</script>

<template>
  <TheHeader></TheHeader>

  <div class="container">
    <h2>Lista Progetti</h2>

    <table class="table">
      <thead>
        <tr>
          <th>Titolo</th>
          <th>Utente</th>
          <th>Contenuto</th>
          <th>Tecnologia</th>
        </tr>
      </thead>

      <tbody>
        <tr>

        </tr>
      </tbody>
    </table>

  </div>

</template>

<style lang="scss">
@use "styles/main";
</style>
