<template>
    <v-container class="register">
        <v-row>
            <v-col xs12 sm12 md12 offset-lg4 lg4>
                <app-logo></app-logo>
                <form>
                    <v-text-input
                        name="name"
                        id="name"
                        label="Full Name"
                        v-model="userModel.name">
                    </v-text-input>
                    <v-text-input
                        id="password" 
                        name="password"
                        type="password"
                        label="Password"
                        v-model="userModel.password">
                    </v-text-input>
                    <v-text-input
                        id="password"
                        name="repassword"
                        type="password"
                        label="Confirm Password">
                    </v-text-input>
                    <v-text-input
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        v-model="userModel.email">
                    </v-text-input>
                    <v-text-input
                        id="school"
                        name="school"
                        label="School"
                        v-model="userModel.school">
                    </v-text-input>
                    <v-text-input
                        id="gender"
                        name="gender"
                        label="Gender"
                        v-model="userModel.gender">
                    </v-text-input>
                    <div>
                        &nbsp
                    </div>
                    <v-btn type="submit" @click.native.prevent="register" round>Submit</v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Logo from '../components/Logo'

    export default {
        name: 'register',
        data () {
            return {
                title: 'Register',
                userModel: {
                    name: '',
                    password: '',
                    email: '',
                    school: '',
                    gender: ''
                }
            }
        },
        methods: {
            register () {
                console.log(this.userModel)
            }
        },
        components: {
            appLogo: Logo
        }
    }
</script>

<style lang="scss" scoped>
    .register {
        height: calc(100vh - 4em);
    }
</style>
