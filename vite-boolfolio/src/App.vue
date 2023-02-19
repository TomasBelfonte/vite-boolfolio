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
  <div class="text-center mt-5 bg-black text-light">
    <h4>Lista Progetti</h4>

    <table class="table mt-5 text-light">
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
        <tr v-for="project in projects" :key="project.id" >
          <td>
            <div v-if="project.cover_img">
            <img src="/the-lich-king.png" alt="" style="width: 60px">
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

  <div class="d-flex justify-content-center gap-5 bg-black">
    <div v-for="project in projects" :key="project.id" class="card my-5 text-center" style="width: 13rem;" >                        
        <img class="card-img-top" src=/the-lich-king.png alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Title: {{ project.title }}</p>
            <p class="card-text">User Id: {{ project.user_id }}</p>
            <p class="card-text">Content: {{ project.content }}</p>
            <p class="card-text">Status: {{ project.status }}</p>
        </div>                    
    </div>
  </div>
</template>

<style lang="scss">
@use "styles/main";
</style>
