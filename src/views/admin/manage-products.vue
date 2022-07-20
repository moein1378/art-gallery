<template>
    <div class="h-100">
        <!--total posts begin-->
        <v-sheet
        color="white"
        class="pa-5"
        >
        
          <v-data-table
            :headers="headers"
            :items="totalProducts"
            sort-by="calories"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:[`item.product_pic`]="{ item }">            
              <v-img
                  :src="item.product_pic"
                  :alt="item.product_pic"
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
            <template v-slot:[`item.product_id`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.product_id}}</span>
            </template>
            <template v-slot:[`item.seller_name`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.seller_name}}</span>
            </template>          
            <template v-slot:[`item.product_name`]="{ item }">
              <span class="limited-table-tile font-weight-bold  black--text text--body1">{{item.product_name}}</span>
            </template>

            <template v-slot:[`item.product_price`]="{ item }">
              <p class="limited-table-tile font-weight-bold  black--text body-1 custom-font mb-0">
                {{
                  (item.product_price != 0) ?
                  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.product_price) :
                  'Free'
                }}
              </p>
            </template>

            <template v-slot:[`item.product_category`]="{ item }">
              <p class="limited-table-tile font-weight-bold  black--text body-1 custom-font mb-0">{{item.product_category}}</p>
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
                      New Product
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
                              v-model="editedItem.product_name"
                              required
                              class="pa-5"
                              label="Product Name*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.product_category"
                              required
                              class="pa-5"
                              label="Product Category*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.product_pic"
                              class="pa-5"
                              :rules="[$store.state.rules.url]"
                              required
                              label="Product pic*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.seller_name"
                              class="pa-5"
                              :rules="[,$store.state.rules.peopleName]"
                              required
                              counter
                              label="Seller Name*"
                            ></v-text-field>

                            <v-text-field
                              v-model="editedItem.seller_avatar"
                              class="pa-5"
                              :rules="[$store.state.rules.url]"
                              label="Seller Avatar"
                            ></v-text-field>

                            <v-row class="pa-5">
                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.seller_email"
                                  :rules="$store.state.rules.emailRules"
                                  label="Seller Email"
                                ></v-text-field>
                              </v-col>

                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.seller_whatsapp"
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
                                  v-model="editedItem.seller_instagram"
                                  :rules="[$store.state.rules.username]"
                                  label="Seller Instagram"
                                ></v-text-field>
                              </v-col>

                              <v-col
                              cols="12"
                              md="6"
                              sm="12"
                              >
                                <v-text-field
                                  v-model="editedItem.seller_facebook"
                                  :rules="[$store.state.rules.username]"
                                  label="Seller Facebook"
                                ></v-text-field>
                              </v-col>
                            </v-row>

                            <v-text-field
                            v-model="editedItem.product_price"
                            required
                            type="number"
                            label="Product Price*"
                            min="0"
                            outlined
                            rounded
                            ></v-text-field>

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
                class="mx-3"
                small
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
import manageProductsApi from '@/api/manage-posts'
export default {
  name:'manage-products',
  data: () => ({
    search: '',
    productDatePickerModal: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Product Id',
        align: 'start',
        sortable: false,
        value: 'product_id',
      },
      { text: 'Seller Name', value: 'seller_name' },
      { text: 'Product Name', value: 'product_name' },
      { text: 'Product Category', value: 'product_category' },
      { text: 'Product pic', value: 'product_pic' },
      { text: 'Product Price', value: 'product_price' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    totalProducts: [],
    editedId: '',
    editedItem: {
      product_id: 1,
      product_name: '',
      product_category: '',
      product_pic:'',
      product_price:0,
      seller_name: '',
      seller_avatar: '',
      seller_email:'',
      seller_instagram: '',
      seller_facebook: '',
      seller_whatsapp:'',
    },
    defaultItem: {
      product_id: 1,
      product_name: '',
      product_category: '',
      product_pic:'',
      product_price:0,
      seller_name: '',
      seller_avatar: '',
      seller_email:'',
      seller_instagram: '',
      seller_facebook: '',
      seller_whatsapp:'',
    },

  }),

  computed: {
    formTitle () {
      return this.editedId === '' ? 'Add Product' : 'Edit Product'
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
      manageProductsApi.get('/products.json')
      .then(({data}) => {
        this.totalProducts = [];
        Object.entries(data).map((item) => {
        this.totalProducts.push({
          product_id : item[0],
          ...item[1]
        })
        })
      })
      .catch(error => console.log(error))
    },

    deleteItem (item) {
      this.editedId = item.product_id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    duplicateItem(item){
      let product = {
        product_name: item.product_name,
        product_category: item.product_category,
        product_pic: item.product_pic,
        product_price: item.product_price,
        seller_name: item.seller_name,
        seller_avatar: item.seller_avatar,
        seller_email: item.seller_email,
        seller_instagram: item.seller_instagram,
        seller_facebook: item.seller_facebook,
        seller_whatsapp: item.seller_whatsapp,
      }
      manageProductsApi.post('/products.json',product).then(response => {
        this.totalProducts.push({
          ...product,
          product_id: response.data.name,
        })
      }).catch(error => console.log(error))
    },

    deleteItemConfirm () {
      manageProductsApi.delete(`/products/${this.editedId}.json`)
        .then(response =>{
          this.totalProducts = this.totalProducts.filter((item)=>{ return item.product_id != this.editedId })
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
      this.editedId = item.product_id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    save () {
      let product = {
        product_name: this.editedItem.product_name,
        product_category: this.editedItem.product_category,
        product_pic: this.editedItem.product_pic,
        product_price: this.editedItem.product_price,
        seller_name: this.editedItem.seller_name,
        seller_avatar: this.editedItem.seller_avatar,
        seller_email: this.editedItem.seller_email,
        seller_instagram: this.editedItem.seller_instagram,
        seller_facebook: this.editedItem.seller_facebook,
        seller_whatsapp: this.editedItem.seller_whatsapp,
      }
      if (this.editedId != '') {
        manageProductsApi.patch(`/products/${this.editedId}.json`,{product_id : this.editedId ,...product})
          .then(response =>{
            if(response.status == 200){              
              this.initialize();
            }
          })
          .catch(error => console.log(error))
      } else {
        manageProductsApi.post('/products.json',product).then(response => {
          this.totalProducts.push({
            ...product,
            product_id: response.data.name,
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