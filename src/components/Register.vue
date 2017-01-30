<template>
    <v-container class="register">
        <app-logo></app-logo>
        <v-row>
            <v-col xs12 offset-sm2 sm8 offset-md3 md6 offset-lg4 lg4>
                <div class="mb-3">
                </div>
                <form @submit.prevent="register">
                    <v-text-input
                        required
                        v-model.trim="userModel.firstname"
                        name="firstName"
                        id="firstName"
                        label="First Name">
                    </v-text-input>
                    <v-text-input
                        required
                        v-model.trim="userModel.lastname"
                        name="lastName"
                        id="lastName"
                        label="Last Name">
                    </v-text-input>
                    <v-text-input
                        required
                        v-model="userModel.password"
                        type="password"
                        name="password"
                        id="password"
                        label="Password">
                    </v-text-input>
                    <div v-show="validatePass" class="error">Passwords don't match.</div>
                    <v-text-input
                        required
                        v-model="confirmPassword"
                        type="password"
                        name="password"
                        id="validatePassword"
                        label="Confirm Password">
                    </v-text-input>
                    <v-text-input
                        required
                        v-model.trim="userModel.email"
                        id="email"
                        name="email"
                        type="email"
                        label="Email">
                    </v-text-input>
                    <v-text-input
                        required
                        v-model.trim="userModel.school"
                        id="school"
                        name="school"
                        label="School">
                    </v-text-input>
                    <v-select
                        required
                        v-model="userModel.gender"
                        :options="genderOptions" 
                        id="gender" 
                        label="Gender" 
                        name="gender">
                    </v-select>
                    <v-select
                        :options="dietaryOptions"
                        v-model="userModel.dietary"
                        id="dietary" 
                        label="Dietary" 
                        name="dietary">
                    </v-select>
                    <div class="file-input">
                        <input type="file" @change="onFileChange">
                    </div>
                    <div class="mlh-check-box">
                        <v-checkbox
                         required
                             v-model="userModel.checkMlh"
                             value-v="yes"
                             id="mlhCode" 
                             name="mlhCode"
                             label="I Agree to MLH Code of Conduct">
                        </v-checkbox>
                    </div>
                    <a id='mlhCodeHref' :href='mlhCodeUrl' target='_blank'>(link)</a>
                    <div>
                        &nbsp
                    </div>
                    <div id="registerBtn">
                        <v-btn class="vt-submit-btn" 
                            @click="register"
                            :ripple="{class: 'teal--text'}"
                            type="submit"
                            :round='true'
                            :loading='submitState'>
                            Submit
                        </v-btn>
                        <div class="error">{{ submitError }}</div>
                    </div>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Logo from '../components/Logo'
    import { firebaseAuth, database, storage } from '../firebase_config'

    export default {
        name: 'register',
        data () {
            return {
                title: 'Register',
                genderOptions: [
                    { 'text': 'Male', 'value': 'male' },
                    { 'text': 'Female', 'value': 'female' },
                    { 'text': 'Other', 'value': 'other' }
                ],
                dietaryOptions: [
                    { 'text': 'None', 'value': 'none' },
                    { 'text': 'Fish', 'value': 'fish' },
                    { 'text': 'Veggie', 'value': 'veggie' }
                ],
                mlhCodeUrl: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
                userModel: {
                    firstname: '',
                    lastname: '',
                    password: '',
                    email: '',
                    school: '',
                    gender: '',
                    dietary: '',
                    checkMlh: []
                },
                confirmPassword: '',
                file: '',
                submitState: false,
                submitError: ''
            }
        },
        computed: {
            validatePass () {
                return this.confirmPassword !== this.userModel.password
            }
        },
        methods: {
            register (e) {
                const email = this.userModel.email
                const password = this.userModel.password
                var _this = this

                firebaseAuth
                .createUserWithEmailAndPassword(email, password)
                .then((currUser) => {
                    const user = firebaseAuth.currentUser
                    if (user) {
                        this.submitState = true

                        database.ref('/users/' + user.uid).set({
                            firstname: this.userModel.firstname,
                            lastname: this.userModel.lastname,
                            email: this.userModel.email,
                            school: this.userModel.school,
                            gender: this.userModel.gender,
                            dietary: this.userModel.dietary,
                            checkMlh: this.userModel.checkMlh[0]
                        })
                        this.userModel.uid = user.uid
                        _this.$store.dispatch('setUser', this.userModel)
                        this.fileUpload({ file: this.file, user: user.uid })
                        this.$router.replace('/')
                    } else {
                        return
                    }
                    // Add user to store with dispatch('setUser')
                })
                .catch(err => {
                    this.submitError = err.message
                    console.log(err)
                    return
                })
            },
            onFileChange (e) {
                this.file = e.target.files[0] || e.dataTransfer.files[0]

                if (!this.file.length) {
                    return
                }
            },
            fileUpload ({ file, user }) {
                const metadata = {
                    'contentType': file.type
                }

                // Push to child path.
                // [START oncomplete]
                storage
                .child('resume/' + user + '/' + file.name)
                .put(file, metadata)
                .then((snapshot) => {
                    console.log('Uploaded', snapshot.totalBytes, 'bytes.')
                    console.log(snapshot.metadata)
                    const url = snapshot.downloadURL
                    console.log('File available at', url)
                    // [START_EXCLUDE]
                    // document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
                    // [END_EXCLUDE]
                })
                .catch((error) => {
                    // [START onfailure]
                    console.error('Upload failed:', error)
                    // [END onfailure]
                })
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
        display: inline-block;
        margin: 0 0 1rem 3rem;
    }
    .file-input {
        margin-bottom: 1rem;
        margin-top: 1.5rem;
    }
    .mlh-check-box {
        display: inline-block;
    }
    .error {
        margin: 1rem auto;
    }
</style>
