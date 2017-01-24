<template>
    <v-container class="register">
        <app-logo></app-logo>
        <v-row>
            <v-col xs12 offset-sm2 sm8 offset-md3 md6 offset-lg4 lg4>
                {{title}}
                <form>
                    <v-text-input
                        name="name"
                        id="name"
                        label="Full Name"
                        v-model="userModel.name">
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
                    <div class="file-input">
                        <input type="file" @change="onFileChange">
                    </div>
                    <div class="checkbox-group">
                        <v-checkbox class="food-checkbox" id="all" name="all" label="All You Can Eat"></v-checkbox>
                        <v-checkbox class="food-checkbox" id="veggy" name="veggy" label="Vegan"></v-checkbox>
                        <v-checkbox class="food-checkbox" id="fishy"
                            name="fishy" label="Fish"></v-checkbox>
                    </div>
                    <v-checkbox class="check-box" id="mlhCode" name="mlhCode" label="MLH Code of Conduct"></v-checkbox>
                    <div>
                        &nbsp
                    </div>
                    <div id="registerBtn">
                        <v-btn class="vt-submit-btn" 
                            :ripple="{class: 'teal--text'}"
                            type="submit"
                            @click.native.prevent="register"
                            round>
                            Submit
                        </v-btn>
                    </div>
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
                },
                image: ''
            }
        },
        methods: {
            register () {
                console.log(this.userModel)
            },
            onFileChange (e) {
                debugger
                var files = e.target.files || e.dataTransfer.files
                if (!files.length) {
                    return
                }
                this.createImage(files[0])
            },
            createImage (file) {
                debugger
                var vm = this
                var reader = new window.FileReader()

                reader.onload = (e) => {
                    vm.image = e.target.result
                }
                reader.readAsDataURL(file)
            },
            removeImage: function (e) {
                this.image = ''
            }
        },
        components: {
            appLogo: Logo
        }
    }
</script>

<style lang="scss" scoped>
    .register {
        padding: 10px 30px;
    }
    .input-group:after {
        background-color: #ffffff;
    }
    #registerBtn {
        text-align: center;
    }
    .food-checkbox {
        display: inline;
        margin-bottom: 1rem;
    }
    .file-input {
        margin-bottom: 1rem;
        margin-top: 1.5rem;
    }
</style>
