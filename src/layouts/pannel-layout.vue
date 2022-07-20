<template>
  <v-app>
    <side-bar :isAdmin="true"></side-bar>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import sideBar from "@/components/side-bar.vue";
export default {
  name:'pannel-layout',
  components:{
    sideBar
  },
}
</script>