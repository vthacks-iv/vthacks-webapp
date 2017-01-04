<template>
    <div>
        <h1>{{ title }}</h1>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="userModel.username">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="userModel.password">
        <label for="repassword">Confirm Password</label>
        <input id="password" type="password">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="userModel.email">
        <label for="school">School</label>
        <input id="school" type="text" v-model="userModel.school">
        <label for="gender">Gender</label>
        <input id="gender" type="text" v-model="userModel.gender">

        <p id="name">{{ paymentData.name }}</p>
        <button action="submit">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {
                title: 'Register',
                userModel: {
                    username: '',
                    password: '',
                    email: '',
                    school: '',
                    gender: ''
                }
            }
        }
    }
</script>

<style scoped>
</style>
