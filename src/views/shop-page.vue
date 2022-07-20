<template>
    <div>
        <!--header banner begin-->
        <header-banner bannerImg="https://images.fineartamerica.com/images-medium-large-5/-tailor-shop-dilip-sheth.jpg">
        <template v-slot:header-banner-content>
            <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
            Shop
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

        <!--products begin-->
        <v-sheet
        color="grey lighten-2"
        class="px-15 py-10"
        >
        <sectionTitle
        :titleContent="{title:'PRODUCTS',subtitle:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',hasDivider:true}"
        >
        </sectionTitle>
        
        <v-row class="justify-center" v-if="$store.state.onLoading">
            <v-col
            v-for="index in 3" :key="index"
            cols="12"
            md="4"
            sm="6"
            >
                <v-skeleton-loader
                v-bind="skeletonAttrs"
                type="image,list-item-two-line"
                ></v-skeleton-loader>
            </v-col>
        </v-row>

        <div class="content" v-else>
            <v-row v-if="nonFreeProducts.length <= 3" class="justify-center">
                <v-col
                cols="12"
                md="4"
                sm="6"
                v-for="(item, index) in nonFreeProducts" :key="index"
                >
                    <v-sheet
                        color="grey darken-4"
                        class="pa-5 h-100 rounded"
                    >   
                        <router-link :to="{ name : 'single-product' , params : {product_id : item.product_id} }">
                            <v-img
                                :src="item.product_pic"
                                :width="370"
                                :height="400"
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
                        </router-link>
                        <div class="d-flex flex-column">
                            <h5 class="white--text text-h5">{{item.product_name}}</h5>
                            <h5 class="white--text text-h5">Price : {{item.product_price}}</h5>
                            <v-hover
                            v-slot="{ hover }"
                            >
                            <v-btn
                                rounded
                                :color="hover ? 'primary white--text' : 'white black--text'"
                                class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                            >
                                Add to cart
                            </v-btn>
                            </v-hover>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>

            <carousel-3d
                v-else
                :inverse-scaling="500"
                :space="600"
                :height="580"
                :controls-visible="true"
                :clickable="false"
                :autoplay="true"
                :autoplay-timeout="3000"
                :display="5"
                >
                <slide v-for="(item, index) in nonFreeProducts" :key="index" :index="index" class="rounded">
                    <v-sheet
                        color="grey darken-4"
                        class="pa-5 h-100 rounded"
                    >   
                        <router-link :to="{ name : 'single-product' , params : {product_id : item.product_id} }">
                            <v-img
                                :src="item.product_pic"
                                :width="370"
                                :height="400"
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
                        </router-link>
                        <div class="d-flex flex-column">
                            <h5 class="white--text text-h5">{{item.product_name}}</h5>
                            <h5 class="white--text text-h5">Price : {{item.product_price}}</h5>
                            <v-hover
                            v-slot="{ hover }"
                            >
                            <v-btn
                                rounded
                                :color="hover ? 'primary white--text' : 'white black--text'"
                                class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                            >
                                Add to cart
                            </v-btn>
                            </v-hover>
                        </div>
                    </v-sheet>
                </slide>
            </carousel-3d>
        </div>
        </v-sheet>
        <!--products end-->

        <!--free products begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >

            <sectionTitle
            :titleContent="{title:'FREE PRODUCTS',subtitle:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',hasDivider:true}"
            >
            </sectionTitle>

            <v-row class="justify-center" v-if="$store.state.onLoading">
                <v-col
                v-for="index in 3" :key="index"
                cols="12"
                md="4"
                sm="6"
                >
                    <v-skeleton-loader
                    v-bind="skeletonAttrs"
                    type="image,list-item-two-line"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
            
            <div class="content" v-else>
                <v-row v-if="freeProducts.length <= 3" class="justify-center">
                    <v-col
                    cols="12"
                    md="4"
                    sm="6"
                    v-for="(item, index) in freeProducts" :key="index"
                    >
                        <v-sheet
                            color="grey darken-4"
                            class="pa-5 h-100 rounded"
                        >   
                            <router-link :to="{ name : 'single-product' , params : {product_id : item.product_id} }">
                                <v-img
                                    :src="item.product_pic"
                                    :width="370"
                                    :height="400"
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
                            </router-link>
                            <div class="d-flex flex-column">
                                <h5 class="white--text text-h5">{{item.product_name}}</h5>
                                <h5 class="white--text text-h5">Price : Free</h5>
                                <v-hover
                                v-slot="{ hover }"
                                >
                                <v-btn
                                    rounded
                                    :color="hover ? 'primary white--text' : 'white black--text'"
                                    class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                                >
                                    Add to cart
                                </v-btn>
                                </v-hover>
                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>

                <carousel-3d
                    v-else
                    :space="600"
                    :perspective="160"
                    :height="580"
                    :controls-visible="true"
                    :clickable="false"
                    :autoplay="true"
                    :autoplay-timeout="3000"
                    :display="3"
                    >
                    <slide v-for="(item, index) in freeProducts" :key="index" :index="index" class="rounded">
                        <v-sheet
                            color="grey darken-4"
                            class="pa-5 h-100 rounded"
                        >   
                            <router-link :to="{ name : 'single-product' , params : {product_id : item.product_id} }">
                                <v-img
                                    :src="item.product_pic"
                                    :width="370"
                                    :height="400"
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
                            </router-link>
                            <div class="d-flex flex-column">
                                <h5 class="white--text text-h5">{{item.product_name}}</h5>
                                <h5 class="white--text text-h5">Price : {{item.product_price}}</h5>
                                <v-hover
                                v-slot="{ hover }"
                                >
                                <v-btn
                                    rounded
                                    :color="hover ? 'primary white--text' : 'white black--text'"
                                    class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                                >
                                    Add to cart
                                </v-btn>
                                </v-hover>
                            </div>
                        </v-sheet>
                    </slide>
                </carousel-3d>
            </div>

        </v-sheet>
        <!--free products end-->
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name:'shop-page',
    data() {
        return {
            breadcrumbs_items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                },
                {
                text: 'Shop',
                disabled: false,
                href: '/shop-page',
                },
            ],
            skeletonAttrs: {
                boilerplate: false,
                elevation: 2,
            },
        }
    },
    computed:{
        ...mapState(['totalProducts']),
        ...mapState(['freeProducts']),
        ...mapState(['nonFreeProducts'])
    },
    created () {
        this.$store.dispatch('loadTotalProducts');
    },
}
</script>