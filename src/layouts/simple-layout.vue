<template>
  <v-app>
    <side-bar :isAdmin="false"></side-bar>
    <v-main>
        <router-view/>
    </v-main>
    <custom-footer></custom-footer>
  </v-app>
</template>

<script>
import sideBar from "@/components/side-bar.vue";
import customFooter from "@/components/custom-footer.vue";
export default {
  name: 'simple-layout',
  components:{
    sideBar,
    customFooter
  },
};
</script>