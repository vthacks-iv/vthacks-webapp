<template>
    <v-navbar class="green">
        <v-navbar-logo>VTHacks</v-navbar-logo>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
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
                    // { text: 'Register', href: '/register', router: true },
                    { text: 'Payment', href: '/payment', router: true }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .navbar__group-header, .navbar__item--active {
        background: hsla(0,0%,100%,.2);
    }
    li.navbar__item>a {
        text-decoration: none;
        color: white;
    }
</style>
