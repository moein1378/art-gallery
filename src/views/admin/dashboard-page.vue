<template>
    <div >
        <!--services begin-->
        <v-sheet
        color="white"
        class="pa-5 h-100"
        >

        <v-row v-if="!isRecivePostsInfo && !isReciveProductsInfo">
            <v-col
            v-for="index in selling_satatus" :key="index"
            cols="12"
            md="4"
            sm="12"
            >
                <v-skeleton-loader
                v-bind="skeletonAttrs"
                type="image,list-item-three-line"
                ></v-skeleton-loader>
            </v-col>
        </v-row>

        <v-row v-else>
            <v-col
            v-for="(item, index) in selling_satatus" :key="index"
            cols="12"
            md="4"
            sm="12"
            >
            <v-sheet
                color="grey lighten-2"
                class="pa-5 rounded-lg text-center"
            >
                <v-icon
                color="primary"
                style="font-size:80px;"
                class="mb-5"
                >
                {{item.icon}} 
                </v-icon>
                <h5 class="font-weight-bold  black--text text-h5 mb-5">{{item.title}}</h5>
                <h2 class="font-weight-bold  black--text text-h2">{{item.count}}</h2>
            </v-sheet> 
            </v-col>
        </v-row>
        </v-sheet>
        <!--services end-->
    </div>
</template>
<script>
import manageApi from '@/api/manage-posts'
export default {
    name:'dashboard-page',
    data() {
        return {
            selling_satatus:[
                {
                icon:'mdi-postage-stamp',
                count:0,
                title:'Total Posts',
                },
                {
                icon:'mdi-palette-advanced',
                count:0,
                title:'Total Products',
                },
                {
                icon:'mdi-currency-usd-off',
                count:0,
                title:'Total Free Products',
                }
            ],
            skeletonAttrs: {
                class: 'my-3',
                boilerplate: false,
                elevation: 2,
            },
            isRecivePostsInfo: false,
            isReciveProductsInfo: false
        }
    },
    methods: {
        getPostsInfo() {
            manageApi.get('/posts.json')
            .then(({data}) => {
                this.selling_satatus[0].count = Object.keys(data).length;
                this.isRecivePostsInfo = true;
            })
            .catch(error => console.log(error))
        },

        getProductsInfo() {
            manageApi.get('/products.json')
            .then(({data}) => {
                let totalProducts = [];
                Object.entries(data).map((item) => {
                    totalProducts.push({
                    product_id : item[0],
                    ...item[1]
                    })
                })
                let freeProducts = totalProducts.filter((product) => { return product.product_price == 0 });
                this.selling_satatus[1].count = totalProducts.length;
                this.selling_satatus[2].count = freeProducts.length;
                this.isReciveProductsInfo = true;
            })
            .catch(error => console.log(error))
        },
        setLayout (layout) {
            this.$store.commit('SET_LAYOUT', layout)
        }
    },
    created() {
        this.setLayout ('pannel-layout');
        this.getPostsInfo();
        this.getProductsInfo();
    },
}
</script>