<template>
    <v-container class="register">
        <app-logo></app-logo>
        <v-row>
            <v-col xs12 offset-sm2 sm8 offset-md3 md6 offset-lg4 lg4>
                {{ title }}
                <form>
                    <v-text-input
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        v-model="userModel.email">
                    </v-text-input>
                    <v-text-input
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        v-model="userModel.password">
                    </v-text-input>
                    <div>
                        &nbsp
                    </div>
                    <div class="text-xs-center text-md-center">
                        <div id="loginBtn">
                            <v-btn class="vt-submit-btn" 
                                :ripple="{class: 'teal--text'}"
                                type="submit"
                                @click.native.prevent="login"
                                round>
                                Login
                            </v-btn>
                        </div>
                        <router-link style='text-decoration: none' to='/register'>
                            <v-btn
                                :ripple="{class: 'teal--text'}"
                                class="vt-submit-btn" round>
                                Register
                            </v-btn>
                        </router-link>
                    </div>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Logo from '../components/Logo'
//    import { firebaseAuth, database } from '../firebase_config'

    export default {
        name: 'login',
        data () {
            return {
                title: 'Join the fun to build and innovate',
                userModel: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login () {
                this.$store.dispatch('logIn', {
                    email: this.userModel.email,
                    password: this.userModel.password
                })
            }
        },
        components: {
            appLogo: Logo
        }
    }
</script>

<style scoped>
    #loginBtn {
        display: inline-block;
    }
</style>

