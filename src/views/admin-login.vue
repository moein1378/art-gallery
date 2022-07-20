<template>

        <v-sheet
        class="h-100 pa-10"
        color="grey lighten-2"
        >
            <v-row
            align="center"
            justify="center"
            class="pa-5"
            >
            <v-col
                class="text-center mt-16 mb-8"
                cols="6"
            >
            <v-card
            class="px-5"
            elevation="2"
            outlined
            shaped
            >
                <v-card-title class="justify-center text-h3">Login</v-card-title>
                <v-form
                ref="adminLoginForm"
                v-model="adminLoginFormValidation"
                lazy-validation
                >   
                    <v-alert
                    :value="(serverErr != '') ? true : false"
                    dense
                    prominent
                    shaped
                    dismissible
                    type="error"
                    transition="scale-transition"
                    >
                        {{serverErr}}
                    </v-alert>

                    <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="[$store.state.rules.emailRules,$store.state.rules.required]"
                    outlined
                    rounded
                    ></v-text-field>

                    <v-text-field
                    label="Password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    :rules="[$store.state.rules.min]"
                    hint="At least 8 characters"
                    required
                    outlined
                    rounded
                    ></v-text-field>

                    <v-hover
                    v-slot="{ hover }"
                    >
                    <v-btn
                        @click="adminLogin()"
                        rounded
                        :loading="(onSendRequest) ? true : false"
                        dark
                        :color="hover ? 'primary white--text' : 'primary white--text'"
                        class="pa-6 my-3 transition-fast-in-fast-out font-weight-bold"
                    >
                        Login
                    </v-btn>
                    </v-hover>
                </v-form>
            </v-card>
            </v-col>
            </v-row>
        </v-sheet>

</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name:'admin-login',
    data() {
        return {
            adminLoginFormValidation: true,
            email:'',
            password:'',
            showPassword: false,
            onSendRequest: false,
            serverErr: ''
        }
    },
    methods: {
        adminLogin(){
            if(this.$refs.adminLoginForm.validate()){
                this.onSendRequest = true
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    localStorage.clear();
                    localStorage.setItem("accessToken", user.accessToken);
                    this.$router.push({ name : 'admin-dashboard' });
                    this.onSendRequest = false
                })
                .catch((error) => {
                    this.serverErr = error.message
                    this.onSendRequest = false
                });
            }
        }
    },
}
</script>