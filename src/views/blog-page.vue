<template>
    <div>
        <!--header banner begin-->
        <header-banner bannerImg="https://image.invaluable.com/housePhotos/doyle/13/630413/H0061-L157048504.jpg">
        <template v-slot:header-banner-content>
            <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
            Blog
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

        <!--simple post begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >
            <v-row class="justify-center" v-if="$store.state.onLoading">
                <v-col
                v-for="index in 2" :key="index"
                cols="12"
                md="6"
                sm="12"
                >
                    <v-skeleton-loader
                    v-bind="skeletonAttrs"
                    type="image,list-item-two-line,actions"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
            <v-row class="justify-center" v-else>
                <v-col
                cols="12"
                md="6"
                sm="12"
                v-for="(item,index) in simple_post" :key="index"
                >
                    <v-card
                        :loading="false"
                        class="grey lighten-4 mx-auto my-12"
                    >
                        <router-link :to="{ name : 'single-blog', params:{post_id : item.post_id}}">
                            <v-img
                                :src="item.post_cover"
                                class="grey lighten-2"
                                :height="350"
                                v-ripple
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
                            <v-card-text class="font-weight-bold grey--text text--darken-1">{{item.post_category}}</v-card-text>
                            <v-card-title class="font-weight-bold grey--text text--darken-3">{{item.post_title}}</v-card-title>
                        </router-link>
                        <v-card-text class="custom-font" v-html="item.post_summary"></v-card-text>
                        <v-card-actions>
                            <v-hover
                            v-slot="{ hover }"
                            >
                            <v-btn
                                rounded
                                dark
                                :to="{ name : 'single-blog', params:{post_id : item.post_id}}"
                                :color="hover ? 'primary white--text' : ''"
                                class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                            >
                                More About
                            </v-btn>
                            </v-hover>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
        <!--simple post end-->

        <!--popular articles begin-->
        <v-sheet
        color="grey darken-4"
        class="px-15 py-10"
        >

            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box">
                        <h3 class="font-weight-bold  white--text text-h3 mb-5">POPULAR ARTICLES</h3>
                        <hr color="white" class="mb-5">
                    </div>
                </template>
            </sectionTitle>

            <v-row class="justify-center" v-if="$store.state.onLoading">
                <v-col
                v-for="index in 3" :key="index"
                cols="12"
                md="4"
                sm="12"
                >
                    <v-skeleton-loader
                    v-bind="skeletonAttrs"
                    type="image,list-item-two-line"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
            <v-row class="justify-center" v-else>
                <v-col
                v-for="(item,index) in popular_articles" :key="index"
                cols="12"
                md="4"
                sm="12"
                >
                    <router-link :to="{ name : 'single-blog', params:{post_id : item.post_id}}">
                        <v-card
                            color="transparent"
                            class="mx-auto my-12"
                            :elevation="0"
                        >
                            <v-img
                                :src="item.post_cover"
                                class="grey lighten-2 rounded"
                                :height="350"
                                v-ripple
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
                            <v-card-text class="custom-font grey--text py-1 px-0">{{item.post_category}}</v-card-text>
                            <v-card-title class="custom-font font-weight-bold white--text py-1 px-0 text-h4">{{item.post_title}}</v-card-title>
                        </v-card>
                    </router-link>
                </v-col>
                <div class="text-center w-100">
                    <v-hover
                    v-slot="{ hover }"
                    >
                    <v-btn
                        rounded
                        light
                        :color="hover ? 'primary white--text' : ''"
                        class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                    >
                        More About
                    </v-btn>
                    </v-hover>
                </div>
            </v-row>
        </v-sheet>
        <!--popular articles end-->

        <!--latest post begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >

            <sectionTitle :titleContent="{useSlot:true}">
                <template v-slot:custom-style>
                    <div class="title-box text-center">
                        <p class="text-subtitle-2 font-weight-bold grey--text text--darken-1">LOOK WHAT'S NEW</p>
                        <h3 class="font-weight-bold  black--text text-h3 mb-5">Latest Posts</h3>
                        <p class="grey--text text--darken-3">
                            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                </template>
            </sectionTitle>

            <v-row class="justify-center" v-if="$store.state.onLoading">
                <v-col
                v-for="index in 2" :key="index"
                cols="12"
                md="6"
                sm="12"
                >
                    <v-skeleton-loader
                    v-bind="skeletonAttrs"
                    type="image,list-item-two-line"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>

            <v-row class="justify-center" v-else>
                <v-col
                cols="12"
                md="6"
                sm="12"
                v-for="(item,index) in latest_post" :key="index"
                >
                    <router-link :to="{ name : 'single-blog', params:{post_id : item.post_id}}">
                        <v-card
                            :loading="false"
                            class="grey lighten-4 mx-auto my-12"
                        >
                            <v-img
                                :src="item.post_cover"
                                class="grey lighten-2"
                                :height="350"
                                v-ripple
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
                            <v-card-text class="custom-font font-weight-bold grey--text text--darken-1">{{item.post_category}}</v-card-text>
                            <v-card-title class="custom-font font-weight-bold grey--text text--darken-3">{{item.post_title}}</v-card-title>
                            <v-card-text class="custom-font" v-html="item.post_summary"></v-card-text>
                        </v-card>
                    </router-link>
                </v-col>
            </v-row>
        </v-sheet>
        <!--latest post end-->

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:'blog-page',
    data() {
        return {
            breadcrumbs_items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                },
                {
                text: 'Blog',
                disabled: false,
                href: '/blog-page',
                },
            ],
            skeletonAttrs: {
                boilerplate: false,
                elevation: 2,
            },
        }
    },
    computed:{
        ...mapState(['totalPosts']),
        ...mapState(['simple_post']),
        ...mapState(['popular_articles']),
        ...mapState(['latest_post'])
    },
    created () {
        this.$store.dispatch('loadTotalPosts');
    },
}
</script>