<template>
  <div>
    <!--header banner begin-->
    <header-banner bannerImg="https://i.pinimg.com/originals/be/48/a8/be48a866a7e206dc30d194d2ab24b1fc.jpg">
      <template v-slot:header-banner-content>
          <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
          Contact Us
          </h1>

          <v-breadcrumbs
            class="justify-center banner-breadcrumbs"
            :items="breadcrumbs_items"
            large
            divider="-"
          >
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                :href="item.href"
                class="text-center"
                :disabled="item.disabled"
              >
                {{ item.text }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>

      </template>
    </header-banner>
    <!--header banner end-->

    <!--contactUs forms & details begin-->
    <v-sheet>
      <v-row class="px-15 py-10">
        <v-col
          cols="12"
          md="4"
          sm="12"
          class="d-flex flex-column justify-start align-start"
        >
          <h3 class="font-weight-bold  black--text text-h3 mb-5">Contact Us</h3>
          <p class="grey--text text--darken-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
          <h5 class="font-weight-bold  black--text text-h5 mb-5">Stet Clita Kasd Gubergren</h5>
          <p class="grey--text text--darken-1">Magna aliquyam erat, sed voluptua at vero et accusam et justo duo dolores rebum.</p>
        </v-col>
        <v-col
          cols="12"
          md="8"
          sm="12"
        >
          <v-form>
            <v-row>
              <v-col
                cols="12"
                md="6"
                sm="12"
              >
                <v-text-field
                  label="Name"
                  outlined
                  rounded
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
                sm="12"
              >
                <v-text-field
                  label="Email"
                  outlined
                  rounded
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="12"
                sm="12"
              >
                <v-textarea
                  outlined
                  rounded
                  name="input-7-4"
                  label="Message"
                  hide-details="auto"
                ></v-textarea>

                <v-checkbox
                  label="Save my name, email, and website in this browser for the next time I comment."
                  color="primary"
                  hide-details
                ></v-checkbox>

                <v-hover
                v-slot="{ hover }"
                >
                <v-btn
                    rounded
                    dark
                    :color="hover ? 'primary white--text' : ''"
                    class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                >
                    Submit
                </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-sheet>
    <!--contactUs forms & details end-->

    <!--stay in touch begin-->
    <v-sheet
      color="grey lighten-2"
      class="px-15 py-10"
    >
      <sectionTitle
      :titleContent="{title:'STAY IN TOUCH',subtitle:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',hasDivider:true}"
      >
      </sectionTitle>

      <v-row>
        <v-col
        v-for="(item, index) in stayInTouch_content" :key="index"
          cols="12"
          md="4"
          sm="12"
        >
          <v-sheet
            color="white"
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
          </v-sheet> 
        </v-col>
      </v-row>
    </v-sheet>
    <!--stay in touch end-->

  </div>
</template>
<script>
export default {
  name:'contactUs-page',
  data() {
    return {
      breadcrumbs_items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Contact Us',
          disabled: false,
          href: '/contact-us',
        },
      ],
      stayInTouch_content:[
        {
          icon:'mdi-map-marker ',
          title:'Address',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
          icon:'mdi-send',
          title:'Mail',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        },
        {
          icon:'mdi-phone',
          title:'Phone',
          summaryText:'Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.'
        }
      ]
    }
  },
}
</script>