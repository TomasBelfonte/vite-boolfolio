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
        .then((resp) => {
          this.projects = (resp.data);
        })
      }
    },

    mounted() {
      this.fetchProjects();
    }
};
</script>

<template>
  <TheHeader></TheHeader>

  <div class="container text-center">
    <h4>Lista Progetti</h4>

    <table class="table">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Titolo</th>
          <th>Utente_ID</th>
          <th>Contenuto</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="project in projects" :key="project.it" >
          <td>
            <div v-if="project.cover_img">
            <img src="http://127.0.0.1:8000/storage/img/the-lich-king.png" alt="" style="width: 60px">
            </div>
          </td>
          <td>{{ project.title }}</td>
          <td>{{ project.user_id }}</td>
          <td>{{ project.content }}</td>
          <td>{{ project.status }}</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<style lang="scss">
@use "styles/main";
</style>
