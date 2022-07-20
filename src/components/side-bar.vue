<template>
    <div>      
      <v-app-bar
        dark
        
      >
        <v-app-bar-nav-icon @click="drawer = true" color="primary"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        dark
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-if="isAdmin"
            v-model="group"
            active-class="primary"
          >
            <v-list-item :to="{ name : 'admin-dashboard' }">
              <v-list-item-icon>
                <v-icon>mdi-monitor-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'manage-posts' }">
              <v-list-item-icon>
                <v-icon>mdi-post</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Manag Posts</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'manage-products' }">
              <v-list-item-icon>
                <v-icon>mdi-store</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Manag Products</v-list-item-title>
            </v-list-item> 

            <v-list-item @click="logout()">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Log Out</v-list-item-title>
            </v-list-item>            

          </v-list-item-group>

          <v-list-item-group
            v-else
            active-class="primary"
            v-model="group"
          >
            <v-list-item :to="{ name : 'home-page' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Home</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'contactUs' }">
              <v-list-item-icon>
                <v-icon>mdi-card-account-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Contact us</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'shop-page' }">
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Shop</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'blog-page' }">
              <v-list-item-icon>
                <v-icon>mdi-post</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Blog</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'about-page' }">
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">About</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name : 'admin-login' }">
              <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-h6">Admin login</v-list-item-title>
            </v-list-item>

          </v-list-item-group>

        </v-list>
      </v-navigation-drawer>
    </div>
</template>
<script>
export default {
  name:"side-bar",
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  props:{
    isAdmin:Boolean,
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.go(0);
    }
  }
}
</script>