<template>
    <div>
        <!--header banner begin-->
        <header-banner :bannerImg="single_post.post_cover">
        <template v-slot:header-banner-content>
            <h1 class="text-h1 font-weight-thin mb-4 text-capitalize">
                {{breadcrumbs_items[1].text}}
            </h1>

            <v-breadcrumbs
                class="justify-center banner-breadcrumbs text-capitalize"
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

        <!--post content begin-->
        <v-sheet
        color="white"
        class="px-15 py-10"
        >
            <v-row>
                <v-col
                    cols="12"
                    md="7"
                    sm="12"
                    class="mx-auto"
                >
                    <div class="postCover">

                        <v-skeleton-loader
                        v-if="onLoading"
                        v-bind="skeletonAttrs"
                        type="image"
                        ></v-skeleton-loader>

                        <v-img
                            v-else
                            :src="single_post.post_cover"
                            class="grey lighten-2 rounded"
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

                        <div class="d-flex justify-space-between align-center post-spec mt-5">

                            <v-skeleton-loader
                            v-if="onLoading"
                            v-bind="postSpecSkeletonAttrs"
                            type="list-item-avatar-three-line"
                            ></v-skeleton-loader>

                            <div class="author-spec w-fit" v-else>
                                <v-card
                                    dark
                                    class="rounded-pill"
                                >
                                    <div class="d-flex flex-wrap justify-space-between align-center">

                                        <v-avatar
                                            class="mx-2"
                                            size="100"
                                            tile
                                        >
                                            <v-img
                                                :src="(single_post.author_avatar) ? single_post.author_avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7IjIMdj4Ng7zU1TcsryLgG5uZAGXWgVuwg&usqp=CAU'"
                                                class="grey lighten-2 rounded-circle"
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
                                        </v-avatar>
                                        <div>
                                            <v-card-title
                                            class="text-h5">
                                            {{single_post.author_name}}
                                            </v-card-title>

                                            <v-card-text>
                                                <!--author instagram begin-->
                                                <v-hover
                                                v-slot="{ hover }"
                                                >
                                                <v-btn
                                                    small
                                                    v-if="single_post.author_instagram"
                                                    icon
                                                    :color="hover ? 'primary' : ''"
                                                    target="_blank"
                                                    :href="`https://www.instagram.com/${single_post.author_instagram}/`"
                                                    class="transition-fast-in-fast-out font-weight-bold text-center"
                                                >
                                                    <v-icon>
                                                    mdi-instagram
                                                    </v-icon>
                                                </v-btn>
                                                </v-hover>
                                                <!--author instagram end-->

                                                <!--author email begin-->
                                                <v-hover
                                                v-slot="{ hover }"
                                                >
                                                <v-btn
                                                    small
                                                    v-if="single_post.author_email"
                                                    icon
                                                    :color="hover ? 'primary' : ''"
                                                    target="_blank"
                                                    :href="`mailto:${single_post.author_email}`"
                                                    class="transition-fast-in-fast-out font-weight-bold text-center"
                                                >
                                                    <v-icon>
                                                    mdi-gmail
                                                    </v-icon>
                                                </v-btn>
                                                </v-hover>
                                                <!--author email end-->

                                                <!--author facebook begin-->
                                                <v-hover
                                                v-slot="{ hover }"
                                                >
                                                <v-btn
                                                    small
                                                    v-if="single_post.author_facebook"
                                                    icon
                                                    :color="hover ? 'primary' : ''"
                                                    target="_blank"
                                                    :href="`http://www.facebook.com/${single_post.author_facebook}`"
                                                    class="transition-fast-in-fast-out font-weight-bold text-center"
                                                >
                                                    <v-icon>
                                                    mdi-facebook
                                                    </v-icon>
                                                </v-btn>
                                                </v-hover>
                                                <!--author facebook end-->

                                                <!--author whatsapp begin-->
                                                <v-hover
                                                v-slot="{ hover }"
                                                >
                                                <v-btn
                                                    small
                                                    v-if="single_post.author_whatsapp"
                                                    icon
                                                    :color="hover ? 'primary' : ''"
                                                    target="_blank"
                                                    :href="`https://api.whatsapp.com/send?phone=${single_post.author_whatsapp}`"
                                                    class="transition-fast-in-fast-out font-weight-bold text-center"
                                                >
                                                    <v-icon>
                                                    mdi-whatsapp
                                                    </v-icon>
                                                </v-btn>
                                                </v-hover>
                                                <!--author whatsapp end-->
                                            </v-card-text>
                                        </div>
                                    </div>
                                </v-card>
                            </div>

                            <v-skeleton-loader
                            v-if="onLoading"
                            v-bind="postSpecSkeletonAttrs"
                            type="list-item-two-line"
                            ></v-skeleton-loader>

                            <div class="post-upload-spec" v-else>
                                <h4 class="text--h4">Category : {{single_post.post_category}}</h4>
                                <h4 class="text--h4">Date : {{single_post.post_date}}</h4>
                            </div>

                        </div>

                        <v-skeleton-loader
                        v-if="onLoading"
                        v-bind="skeletonAttrs"
                        type="list-item-three-line"
                        ></v-skeleton-loader>

                        <div class="post-content mt-5" v-html="single_post.post_content" v-else></div>

                        <v-skeleton-loader
                        v-if="onLoading"
                        v-bind="skeletonAttrs"
                        type="actions"
                        ></v-skeleton-loader>

                        <div class="share-option d-flex mt-5" v-else>
                            <v-speed-dial
                            v-model="dial_share_option_flag"
                            direction="right"
                            open-on-hover>
                                <template v-slot:activator>
                                <v-hover
                                v-slot="{ hover }">                                
                                    <v-btn :color="hover ? 'primary' : ''" class="transition-fast-in-fast-out" fab bottom small dark>
                                        <v-icon v-if="dial_share_option_flag">mdi-close</v-icon>
                                        <v-icon v-else>mdi-share-variant</v-icon>
                                    </v-btn>
                                </v-hover>
                                </template>
                                <v-hover
                                v-slot="{ hover }"
                                v-for="(item, index) in share_option" :key="index"
                                >                                
                                <v-btn
                                dark
                                fab
                                bottom
                                small
                                :color="hover ? 'primary' : ''"
                                :href="item.shareLink"
                                target="_blank"
                                class="transition-fast-in-fast-out"
                                >
                                <v-icon>{{item.icon}}</v-icon>
                                </v-btn>
                                </v-hover>
                            </v-speed-dial>
                        </div>
                    </div>
<!-- 
                    <div class="prev-next-post d-flex justify-space-between mt-5">
                        <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-hover
                            v-slot="{ hover }"
                            >
                            <v-btn
                                dark
                                small
                                ripple
                                rounded
                                v-bind="attrs"
                                v-on="on"                                
                                :color="hover ? 'primary' : ''"
                                to="#"
                                class="px-3 py-5 transition-fast-in-fast-out font-weight-bold text-center prev-post"
                            >
                                <v-icon>
                                mdi-arrow-left-thin 
                                </v-icon>
                                Prev Post
                            </v-btn>
                            </v-hover>
                        </template>
                        <span>Prev Post Title</span>
                        </v-tooltip>

                        <v-tooltip right>
                        <template v-slot:activator="{ on, attrs }">
                            <v-hover
                            v-slot="{ hover }"
                            >
                            <v-btn
                                dark
                                small
                                ripple
                                rounded
                                v-bind="attrs"
                                v-on="on"                                
                                :color="hover ? 'primary' : ''"
                                to="#"
                                class="px-3 py-5 transition-fast-in-fast-out font-weight-bold text-center next-post"
                            >
                                Next Post
                                <v-icon >
                                mdi-arrow-right-thin 
                                </v-icon>
                            </v-btn>
                            </v-hover>
                        </template>
                        <span>Next Post Title</span>
                        </v-tooltip>
                    </div> -->
                </v-col>


            </v-row>

        </v-sheet>
        <!--leave a reply begin-->
        <v-sheet
        color="grey lighten-2"
        class="px-15 py-10"
        >
            <v-row>
                <v-col
                    cols="12"
                    md="7"
                    sm="12"
                    class="mx-auto"
                >
                    <sectionTitle
                    :titleContent="{title:'Leave a Reply',subtitle:'Your email address will not be published. Required fields are marked *',hasDivider:true}"
                    >
                    </sectionTitle>

                    <div class="user-reply-box">
                        <v-form class="mt-5">
                            <v-textarea
                            outlined
                            rounded
                            name="input-7-4"
                            label="Comment"
                            
                            ></v-textarea>

                            <v-text-field
                            label="Name"
                            outlined
                            rounded
                            
                            ></v-text-field>

                            <v-text-field
                            label="Email"
                            outlined
                            rounded
                            
                            ></v-text-field>

                            <v-text-field
                            label="Website"
                            outlined
                            rounded
                            
                            ></v-text-field>

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
                                Post Comment
                            </v-btn>
                            </v-hover>
                        </v-form>
                    </div>
                </v-col>
            </v-row>
        </v-sheet>
        <!--leave a reply end-->
    </div>
</template>
<script>
import managePostsApi from '@/api/manage-posts'
export default {
    name:'single-blog',
    data() {
        return {
            breadcrumbs_items: [
                {
                text: 'Blog',
                disabled: false,
                href: '/user/blog-page',
                },
                {
                text: 'single blog',
                disabled: false,
                href: '/single-blog',
                },
            ],
            single_post:{},
            share_option:[],
            dial_share_option_flag: false,
            pageUrl: "aaaa",
            postSpecSkeletonAttrs: {
                class:'w-25',
                boilerplate: false,
                elevation: 2,
            },
            skeletonAttrs: {
                class: 'my-3',
                boilerplate: false,
                elevation: 2,
            },
            onLoading: true

        }
    },
    methods: {
        getSinglePost (post_id) {
        managePostsApi.get(`/posts/${post_id}.json`)
            .then(response =>{
                this.single_post = response.data
                this.breadcrumbs_items[1].text = response.data.post_title
                this.breadcrumbs_items[1].href = `/single-blog/${post_id}`
                this.onLoading = false;
                this.pageUrl = window.location.href;
                this.share_option = [
                {
                    shareLink: `https://www.facebook.com/sharer/sharer.php?u=${this.pageUrl}`,
                    icon: 'mdi-facebook'
                },
                {
                    shareLink: `https://twitter.com/share?url=${this.pageUrl}&text=${this.pageUrl}`,
                    icon: 'mdi-twitter'
                },
                {
                    shareLink: `https://api.whatsapp.com/send?text=${this.pageUrl}`,
                    icon: 'mdi-whatsapp'
                },
                {
                    shareLink: `https://t.me/share/url?url={${this.pageUrl}}&text={${this.pageUrl}}`,
                    icon: 'mdi-send'
                }
                ]
            }
            )
            .catch(error => console.log(error))
        },
    },
    watch:{
        '$route.params.post_id': {
            handler: function(post_id) {
                if(post_id != 'undefined' && post_id != undefined && post_id.length == 20){
                    this.getSinglePost(post_id)
                }else if(post_id.length > 20){
                    this.$router.push({ name : 'notFound-page' })
                }
            },
            deep: true,
            immediate: true
        },
    },
}
</script>