<template>
    <v-navbar class="green">
        <v-navbar-side-icon class="hidden-sm-and-up"></v-navbar-side-icon>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-navbar-logo>Navbar</v-navbar-logo>
        <v-navbar-item v-for="item in items" :item="item" :router="item.router"></v-navbar-item>
    </v-navbar>
</template>

<script>
    export default {
        name: 'nav',
        data () {
            return {
                items: [
                    { text: 'Home', href: '/', router: true },
                    { text: 'Payment', href: '/payment', router: true }
                ]
            }
        }
    }
</script>

<style scoped>
</style>
