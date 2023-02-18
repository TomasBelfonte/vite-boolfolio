<script>
import TheHeader from './components/TheHeader.vue';

export default {
    components: { TheHeader },

    data() {
        return {
          projects: [],
        };
    },
  
    methods: {
      fetchProjects() {
        
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
