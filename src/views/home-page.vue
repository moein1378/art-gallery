<template>
  <div>
    <!--header banner begin-->
    <header-banner bannerImg="https://artellite.co.uk/sites/default/files/p/against_the_failing_light_oil_on_board_112x133cm.jpg">
      <template v-slot:header-banner-content>
          <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
          Home
          </h1>
          <h4 class="text-h4 font-weight-thin mb-4">
          Masterpieces Of The Department Of Prints And Drawings
          </h4>
          <v-hover
          v-slot="{ hover }"
          >
          <v-btn
              rounded
              light
              :color="hover ? 'primary white--text' : ''"
              class="pa-6 transition-fast-in-fast-out font-weight-bold"
          >
              More About
          </v-btn>
          </v-hover>
      </template>
    </header-banner>
    <!--header banner end-->

    <!--introduction begin-->
    <v-sheet
      color="grey lighten-2"
    >
      <v-row class="pa-5">
        <v-col
          cols="12"
          md="6"
          sm="12"
          class="d-flex flex-column justify-center align-start"
        >
          <h4 class="subtitle-2 font-weight-bold  grey--text text--darken-1 mb-5">ABOUT THE MUSEUM</h4>
          <h3 class="font-weight-bold  black--text text-h3 mb-5">We Combine Classic & Modern Arts</h3>
          <p class="grey--text text--darken-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          <v-hover
            v-slot="{ hover }"
          >
            <v-btn
              rounded
              dark
              :color="hover ? 'primary white--text' : ''"
              class="pa-6 transition-fast-in-fast-out font-weight-bold"
            >
              More About
            </v-btn>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-img
            src="https://www.definitelygreece.com/wp-content/uploads/2020/05/518px-Poet_and_Muse-min.jpg"
            :aspect-ratio="1.1"
            class="grey lighten-2 rounded-l-xl"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-sheet>
    <!--introduction end-->

    <!--exhibitions begin-->
    <v-sheet
      color="white"
      class="pa-5"
    >
      <sectionTitle
      :titleContent="{title:'EXHIBITIONS',subtitle:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',hasDivider:true}"
      >
      </sectionTitle>

      <v-row>
        <v-col
        v-for="(item, index) in exhibition_content" :key="index"
          cols="12"
          md="6"
          sm="12"
          class="pa-10"
        >
          <v-row class="grey darken-4 pa-5">
            <v-col
              cols="12"
              md="6"
              sm="12"
              class="d-flex flex-column justify-space-between"
            >

              <v-hover
                v-slot="{ hover }"
              >
                <a href="#">
                  <h5
                  :class="hover ? 'primary--text' : 'white--text'"
                  class="font-weight-bold transition-fast-in-fast-out white--text text-h5 mb-5">{{item.title}}</h5>
                </a>
              </v-hover>
              <div class="card-footer">
                <h6 class="font-weight-bold white--text text-h6 mb-2">{{item.footerText}}</h6>
                <span class="font-weight-bold grey--text text--darken-3">{{item.date.toLocaleDateString()}}</span>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              sm="12"
            >

              <v-img
                :src="item.img"
                :aspect-ratio="0.9"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
    <!--exhibitions end-->

    <!--news begin-->
    <v-sheet
      color="grey lighten-2"
    >
      <v-row class="pa-5">
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Athena_column-Academy_of_Athens.jpg/1200px-Athena_column-Academy_of_Athens.jpg"
            :aspect-ratio="1.1"
            gradient="to top right, rgb(0 0 0), rgb(255 213 95 / 19%)"
            class="grey lighten-2 rounded-r-xl"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          sm="12"
          class="d-flex flex-column justify-center align-start"
        >
          <h4 class="subtitle-2 font-weight-bold  grey--text text--darken-1 mb-5">NEW EXHIBITION</h4>
          <h3 class="font-weight-bold  black--text text-h3 mb-5">Great Kings: The Art Of Armour Making</h3>
          <div class="play-btn d-flex align-center justify-space-between">
            <v-hover
              v-slot="{ hover }"
            >
              <v-btn
                rounded
                dark
                fab
                :color="hover ? 'primary white--text' : ''"
                to="#"
                class="pa-6 transition-fast-in-fast-out font-weight-bold"
              >
                <v-icon light>
                  mdi-play
                </v-icon>
              </v-btn>
            </v-hover>
            <span class="ml-3 text--subtitle-2">Start Exploring</span>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <!--news end-->

    <!--services begin-->
    <v-sheet
      color="white"
      class="pa-5"
    >

      <sectionTitle
      :titleContent="{title:'SERVICES',subtitle:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',hasDivider:true}"
      >
      </sectionTitle>

      <v-row>
        <v-col
        v-for="(item, index) in services_content" :key="index"
          cols="12"
          md="4"
          sm="12"
        >
          <v-sheet
            color="grey lighten-2"
            class="pa-5 rounded-lg"
          >
            <v-icon
              color="primary"
              style="font-size:80px;"
              class="mb-5"
            >
              {{item.icon}} 
            </v-icon>
            <h5 class="font-weight-bold  black--text text-h5 mb-5">{{item.title}}</h5>
            <p class="grey--text text--darken-3 mb-5">
              {{item.summaryText}}
            </p>

            <v-hover
              v-slot="{ hover }"
            >
              <v-btn
                dark
                small
                rounded
                outlined
                :color="hover ? 'primary' : 'black'"
                to="#"
                class="px-3 py-5 transition-fast-in-fast-out font-weight-bold text-center"
              >
                More Info
                <v-icon >
                  mdi-arrow-right-thin 
                </v-icon>
              </v-btn>
            </v-hover>
          </v-sheet> 
        </v-col>
      </v-row>
    </v-sheet>
    <!--services end-->

  </div>
</template>

<script>
export default {
  name: 'home-view',
  data() {
    return {
      exhibition_content:[
        {
          img:'https://c.files.bbci.co.uk/13E2E/production/_111145418_easterislandstatue.jpg',
          title:'Early History of Easter in Europe',
          footerText:'EXHIBITION',
          date:new Date(Date.UTC(2019, 11, 1, 3, 0, 0))
        },
        {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlvm_2ZK9bZQWpOjRvVp8JMYDbQJMdGUg2Lg8AfI-nIRnCCmCjHMlS92V6lwT9Yj35e8&usqp=CAU',
          title:'The Mysteries Of The World Art Objects',
          footerText:'EXHIBITION',
          date:new Date(Date.UTC(2022, 11, 9, 0, 0, 0))
        }
      ],
      services_content:[
        {
          icon:'mdi-palette',
          title:'Painting guide',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
          icon:'mdi-camera',
          title:'Photography',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
          icon:'mdi-shopping',
          title:'Shop',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
