<template>
    <div>
        <!--header banner begin-->
        <header-banner bannerImg="https://soviet-art.ru/wp-content/uploads/2017/11/K.N.-Istomin.-Vuzovki-students-of-Institute.-Oil-canvas.-1933.-State-Russian-museum.jpg">
        <template v-slot:header-banner-content>
            <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
            About
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

        <!--visit our gallery begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >
            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box text-center">
                        <p class="custom-font subtitle-1 grey--text text--darken-2">VISIT OUR GALLERY</p>
                        <h3 class="font-weight-bold  black--text text-h3 mb-5">WELCOME TO OUR GALLERY</h3>
                        <p class="grey--text text--darken-3">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                </template>
            </sectionTitle>

            <v-row>
                <v-col
                cols="12"
                md="3"
                sm="4"
                v-for="(item, index) in gallery_items" :key="index"
                >
                    <div class="service-icon text-center">
                        <v-icon color="primary" style="font-size:80px;" class="grey darken-4 pa-5 rounded-circle">{{item.icon}}</v-icon>
                        <h6 class="font-weight-bold  grey--text text--darken-4 text-h6">{{item.name}}</h6>
                        <p class="custom-font subtitle-1 grey--text text--darken-2">{{item.description}}</p>
                    </div>
                </v-col>
            </v-row>
        </v-sheet>
        <!--visit our gallery end-->

        <!--price table begin-->
        <v-sheet
        color="grey lighten-2"
        class="px-15 py-10"
        >
            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box text-center">
                        <p class="custom-font subtitle-1 grey--text text--darken-2">ENJOY THE ART</p>
                        <h3 class="font-weight-bold  black--text text-h3 mb-5">PRICE TABLE</h3>
                        <p class="grey--text text--darken-3">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                </template>
            </sectionTitle>

            <v-row>
                <v-col
                cols="12"
                md="6"
                sm="12"
                >
                    <v-simple-table dark>
                        <template v-slot:default>
                        <tbody>
                            <tr
                            v-for="(item,index) in priceTable_items_first"
                            :key="index"
                            >
                            <td class="pa-7">
                                <h5 class="font-weight-bold text-h5 mb-2">{{ item.name }}</h5>
                                <p class="custom-font subtitle-1 grey--text text--lighten-1 mb-0">{{item.description}}</p>
                            </td>
                            <td class="pa-7">
                                <h5 class="text-h5">{{item.price}}</h5>
                            </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-col>

                <v-col
                cols="12"
                md="6"
                sm="12"
                >
                    <v-simple-table dark>
                        <template v-slot:default>
                        <tbody>
                            <tr
                            v-for="(item,index) in priceTable_items_second"
                            :key="index"
                            >
                            <td class="pa-7">
                                <h5 class="font-weight-bold text-h5 mb-2">{{ item.name }}</h5>
                                <p class="custom-font subtitle-1 grey--text text--lighten-1 mb-0">{{item.description}}</p>
                            </td>
                            <td class="pa-7">
                                <h5 class="text-h5">{{item.price}}</h5>
                            </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
            </v-row>
            <div class="w-100 text-center mt-5">
                <v-hover
                v-slot="{ hover }"
                >
                <v-btn
                    rounded
                    dark
                    outlined
                    :color="hover ? 'primary' : 'grey darken-4'"
                    to="#"
                    class="pa-6 transition-fast-in-fast-out font-weight-bold"
                >
                    More About
                </v-btn>
                </v-hover>
            </div>
        </v-sheet>
        <!--price table end-->

        <!--our team begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >
            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box text-center">
                        <p class="custom-font subtitle-1 grey--text text--darken-2">MEET THE EXPERTS</p>
                        <h3 class="font-weight-bold  black--text text-h3 mb-5">OUR TEAM</h3>
                        <p class="grey--text text--darken-3">
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                </template>
            </sectionTitle>

            <v-row>
                <v-col
                v-for="(item,index) in team_members" :key="index"
                cols="12"
                md="3"
                sm="6"
                class="pa-10"
                >   
                    <v-card
                    elevation="16"
                    outlined
                    color="grey darken-4"
                    shaped
                    >

                        <v-img
                            :src="item.avatar"
                            class="grey lighten-2"
                            :aspect-ratio="1"
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

                        <v-card-title
                        class="text-h5 white--text"
                        >
                        {{item.name}}
                        </v-card-title>
                        <v-card-subtitle class="white--text">{{item.jobSide}}</v-card-subtitle>
                        <v-card-actions>
                            <v-btn
                            icon
                            v-for="(item, index) in item.follow_options" :key="index"
                            :to="item.url"
                            color="primary"
                            >
                                <v-icon>
                                    {{item.icon}}
                                </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
        <!--our team end-->

        <!--our location begin-->
        <v-sheet
        color="grey lighten-2"
        class="pa-5"
        >
            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box text-center">
                        <p class="custom-font subtitle-1 grey--text text--darken-2">FOLLOW US ON MAP</p>
                        <h3 class="font-weight-bold  black--text text-h3 mb-5">OUR LOCATION</h3>
                        <p class="grey--text text--darken-3">
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                </template>
            </sectionTitle>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="500" frameborder="0" style="border:0"></iframe>
        </v-sheet>
        <!--our location end-->
    </div>
</template>
<script>
export default {
    name:'about-page',
    data() {
        return {
            breadcrumbs_items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                },
                {
                text: 'About',
                disabled: false,
                href: '/about-page',
                },
            ],
            gallery_items:[
                {
                    icon:'mdi-spray',
                    name:'Spray painting',
                    description:'Lorem ipsum'
                },
                {
                    icon:'mdi-draw-pen',
                    name:'Pen sketch',
                    description:'Lorem ipsum'
                },
                {
                    icon:'mdi-brush',
                    name:'Brush coloring',
                    description:'Lorem ipsum'
                },
                {
                    icon:'mdi-palette-swatch-variant',
                    name:'Various palette',
                    description:'Lorem ipsum'
                }
            ],
            priceTable_items_first:[
                {
                    name:'Permanent Collection',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                },
                {
                    name:'Records & Rebels',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                },
                {
                    name:'Restored Paintings',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                }
            ],
            priceTable_items_second:[
                {
                    name:'Van Gogh Dreams',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                },
                {
                    name:'About Nature',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                },
                {
                    name:'Picasso in Paris',
                    description:'Lorem ipsum dolor sit amet',
                    price:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(3500)
                }
            ],
            team_members:[
                {
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaszg9LNuUXYaXQSzXOuWZmpd2PfumfTRBwg&usqp=CAU',
                    name:'antonio guadrivol',
                    jobSide:'Director',
                    follow_options:[
                        {
                            icon:'mdi-facebook',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-twitter',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-whatsapp',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-gmail',
                            url: 'https://www.urlfollow.com'
                        }
                    ]
                },
                {
                    avatar:'https://static.bangkokpost.com/media/content/20200619/c1_1937552_200619122619.jpg',
                    name:'lucy spark',
                    jobSide:'Art Expert',
                    follow_options:[
                        {
                            icon:'mdi-facebook',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-twitter',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-whatsapp',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-gmail',
                            url: 'https://www.urlfollow.com'
                        }
                    ]
                },
                {
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSMVi_LmJbjZNWqXt9RJn8u5I9LwmAxCk5nqTmsc4X2Mnok9Y2fLoeeBJn6FKBlRqlag&usqp=CAU',
                    name:'mia sozie',
                    jobSide:'History Expert',
                    follow_options:[
                        {
                            icon:'mdi-facebook',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-twitter',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-whatsapp',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-gmail',
                            url: 'https://www.urlfollow.com'
                        }
                    ]
                },
                {
                    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Js8snESj4_yj7Oj7OPvKJ3CbLJTJ0et6A&usqp=CAU',
                    name:'santos marino',
                    jobSide:'Photography Expert',
                    follow_options:[
                        {
                            icon:'mdi-facebook',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-twitter',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-whatsapp',
                            url: 'https://www.urlfollow.com'
                        },
                        {
                            icon:'mdi-gmail',
                            url: 'https://www.urlfollow.com'
                        }
                    ]
                }
            ]
        }
    },
}
</script>