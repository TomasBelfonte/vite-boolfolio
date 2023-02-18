<script>
import TheHeader from './components/TheHeader.vue';

export default {
    data() {
        return {
            "message": "ciao come va?"
        };
    },
    components: { TheHeader }
};
</script>

<template>
  <TheHeader></TheHeader>
<h1>fanc</h1>
</template>

<style lang="scss">
@use "styles/main";
</style>
