<template>
  <v-app>
    <v-app>
      <component v-bind:is="layout"></component>
    </v-app>
  </v-app>
</template>

<script>
import pannelLayout from './layouts/pannel-layout.vue';
import simpleLayout from './layouts/simple-layout.vue'
import "./../public/css/unScoped-style.css"
export default {
  name: 'App',
  components: {
    'pannel-layout': pannelLayout,
    'simple-layout': simpleLayout
  },
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
};
</script>