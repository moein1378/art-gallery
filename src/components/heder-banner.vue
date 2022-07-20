<template>
    <v-row>
        <v-col
        cols="12">
        <v-parallax
            :src="bannerImg"
            height="700"
            class="header-banner-parallax"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col
                class="d-flex flex-column align-center"
                cols="12"
            >

            <slot name="header-banner-content"></slot>
            </v-col>
            </v-row>
        </v-parallax>
        </v-col>
    </v-row>
</template>
<script>
export default {
    name:'header-banner',
    props:{
        bannerImg:String
    }
}
</script>