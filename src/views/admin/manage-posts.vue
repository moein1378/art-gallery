<template>
    <div class="h-100">
        <!--total posts begin-->
        <v-sheet
        color="white"
        class="pa-5"
        >
        
          <v-data-table
            :headers="headers"
            :items="totalPosts"
            sort-by="calories"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:[`item.post_cover`]="{ item }">            
              <v-img
                  :src="item.post_cover"
                  :alt="item.post_cover"
                  class="grey lighten-2 my-2"
                  height="100px"
                  width="100px"
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
            </template>
            <template v-slot:[`item.post_id`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.post_id}}</span>
            </template>
            <template v-slot:[`item.author_name`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.author_name}}</span>
            </template>
            <template v-slot:[`item.post_date`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.post_date}}</span>
            </template>            
            <template v-slot:[`item.post_title`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.post_title}}</span>
            </template>

            <template v-slot:[`item.post_summary`]="{ item }">
              <p class="limited-table-tile font-weight-bold  black--text body-1 custom-font mb-0" v-html="item.post_summary"></p>
            </template>

            <template v-slot:[`item.post_content`]="{ item }">
              <p class="limited-table-tile font-weight-bold  black--text body-1 custom-font mb-0" v-html="item.post_content"></p>
            </template>

            <template v-slot:[`item.post_category`]="{ item }">
              <p class="limited-table-tile font-weight-bold  black--text body-1 custom-font mb-0">{{item.post_category}}</p>
            </template>

            <template v-slot:[`top`]>
              <v-toolbar
                flat
              >
                
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>

                <v-dialog
                  v-model="dialog"
                  max-width="800px"
                >
                  <template v-slot:[`activator`]="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      New Post
                      <v-icon
                        right
                        dark
                      >
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-form>
                            <v-text-field
                              v-model="editedItem.post_title"
                              required
                              :rules="[$store.state.rules.counter]"
                              class="pa-5"
                              counter
                              label="Post Title*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.post_category"
                              required
                              :rules="[$store.state.rules.counter]"
                              class="pa-5"
                              counter
                              label="Post Category*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.post_cover"
                              class="pa-5"
                              required
                              :rules="[$store.state.rules.url]"
                              label="Post Cover*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.author_name"
                              class="pa-5"
                              required
                              :rules="[$store.state.rules.peopleName]"
                              counter
                              label="Post Author*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.author_avatar"
                              class="pa-5"
                              :rules="[$store.state.rules.url]"
                              label="Author Avatar"
                            ></v-text-field>

                            <v-row class="pa-5">
                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.author_email"
                                  :rules="$store.state.emailRules"
                                  label="Author Email"
                                ></v-text-field>
                              </v-col>

                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.author_whatsapp"
                                  :rules="$store.state.phoneNumberRules"
                                  counter
                                  label="Whatapp Number"
                                ></v-text-field>
                              </v-col>
                            </v-row>

                            <v-row class="pa-5">
                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.author_instagram"
                                  :rules="[$store.state.rules.username]"
                                  label="Author Instagram"
                                ></v-text-field>
                              </v-col>

                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.author_facebook"
                                  :rules="[$store.state.rules.username]"
                                  label="Author Facebook"
                                ></v-text-field>
                              </v-col>
                            </v-row>

                            <v-dialog
                              ref="postDatePicker"
                              v-model="postDatePickerModal"
                              :return-value.sync="editedItem.post_date"
                              persistent
                              width="290px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="editedItem.post_date"
                                  class="pa-5"
                                  label="Picke Post Upload Date*"
                                  required
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="editedItem.post_date"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="postDatePickerModal = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.postDatePicker.save(editedItem.post_date)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-dialog>

                            <label class="custom-font" for="post_summary">Post Summary</label>
                            <vue-editor id="post_summary" class="mb-5" v-model="editedItem.post_summary" />

                            <label class="custom-font" for="post_content">Post Content</label>
                            <vue-editor id="post_content" v-model="editedItem.post_content" />

                            <v-checkbox
                              v-model="editedItem.is_popular"
                              label="This Post Is Popular"
                              color="primary"
                              hide-details
                            ></v-checkbox>
                        </v-form>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this post?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                small
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                class="mx-3"
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
              <v-icon
                small
                @click="duplicateItem(item)"
              >
                mdi-content-duplicate
              </v-icon>
            </template>
          </v-data-table>

        </v-sheet>
        <!--total posts begin-->
    </div>
</template>
<script>
import managePostsApi from '@/api/manage-posts'
export default {
  name:'manage-posts',
  data: () => ({
    search: '',
    postDatePickerModal: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Post Id',
        align: 'start',
        sortable: false,
        value: 'post_id',
      },
      { text: 'Author Name', value: 'author_name' },
      { text: 'Post Date', value: 'post_date' },
      { text: 'Post Title', value: 'post_title' },
      { text: 'Post Category', value: 'post_category' },
      { text: 'Post Cover', value: 'post_cover' },
      { text: 'Post Summary', value: 'post_summary' },
      { text: 'Post Content', value: 'post_content' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    totalPosts: [],
    editedId: '',
    editedItem: {
      post_id: 1,
      post_title: '',
      post_category: '',
      post_cover:'',
      post_content:'',
      post_summary:'',
      is_popular: false,
      author_name: '',
      author_avatar: '',
      author_email:'',
      author_instagram: '',
      author_facebook: '',
      author_whatsapp:'',
      post_date: '',
    },
    defaultItem: {
      post_id: 1,
      post_title: '',
      post_category: '',
      post_cover:'',
      post_content:'',
      post_summary:'',
      is_popular: false,
      author_name: '',
      author_avatar: '',
      author_email:'',
      author_instagram: '',
      author_facebook: '',
      author_whatsapp:'',
      post_date: '',
    },

  }),

  computed: {
    formTitle () {
      return this.editedId === '' ? 'Add Post' : 'Edit Post'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.setLayout ('pannel-layout')
    this.initialize()
  },

  methods: {
    initialize () {
      managePostsApi.get('/posts.json')
      .then(({data}) => {
        this.totalPosts = [];
        Object.entries(data).map((item) => {
        this.totalPosts.push({
          post_id : item[0],
          ...item[1]
        })
        })
      })
      .catch(error => console.log(error))
    },

    deleteItem (item) {
      this.editedId = item.post_id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    duplicateItem(item){
      let post = {
        post_title: item.post_title,
        post_category: item.post_category,
        post_cover: item.post_cover,
        post_content: item.post_content,
        post_summary: item.post_summary,
        is_popular: item.is_popular,
        author_name: item.author_name,
        author_avatar: item.author_avatar,
        author_email: item.author_email,
        author_instagram: item.author_instagram,
        author_facebook: item.author_facebook,
        author_whatsapp: item.author_whatsapp,
        post_date: item.post_date,
      }
      managePostsApi.post('/posts.json',post).then(response => {
        this.totalPosts.push({
          ...post,
          post_id: response.data.name,
        })
      }).catch(error => console.log(error))
    },

    deleteItemConfirm () {
      managePostsApi.delete(`/posts/${this.editedId}.json`)
        .then(response =>{
          this.totalPosts = this.totalPosts.filter((item)=>{ return item.post_id != this.editedId })
          if(response.status == 200){
            this.editedId = ''
          }
        }
        )
        .catch(error => console.log(error))
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedId = ''
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    },
    editItem (item) {
      this.editedId = item.post_id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    save () {
      let post = {
        post_title: this.editedItem.post_title,
        post_category: this.editedItem.post_category,
        post_cover: this.editedItem.post_cover,
        post_content: this.editedItem.post_content,
        post_summary: this.editedItem.post_summary,
        is_popular: this.editedItem.is_popular,
        author_name: this.editedItem.author_name,
        author_avatar: this.editedItem.author_avatar,
        author_email: this.editedItem.author_email,
        author_instagram: this.editedItem.author_instagram,
        author_facebook: this.editedItem.author_facebook,
        author_whatsapp: this.editedItem.author_whatsapp,
        post_date: this.editedItem.post_date,
      }
      if (this.editedId != '') {
        managePostsApi.patch(`/posts/${this.editedId}.json`,{post_id : this.editedId ,...post})
          .then(response =>{
            if(response.status == 200){              
              this.initialize();
            }
          })
          .catch(error => console.log(error))
      } else {
        managePostsApi.post('/posts.json',post).then(response => {
          this.totalPosts.push({
            ...post,
            post_id: response.data.name,
          })
        }).catch(error => console.log(error))
      }
      this.close()
    },

    setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
    },

  },
}
</script>