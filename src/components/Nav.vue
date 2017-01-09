<template>
    <v-navbar class="white">
        <v-navbar-logo>VTHACKS</v-navbar-logo>
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
                    { text: 'Register', href: '/register', router: true },
                    { text: 'Sponsors', href: '/sponsors', router: true }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .navbar__group-header, .navbar__item--active {
        background: hsl(175, 41%, 79%);
        box-shadow: 0px -4px 0px #0097A7 inset;
        color: rgba(225, 225, 225, 1);
    }
    .navbar__group-header:hover, .navbar__item:hover {
        background: hsla(181, 31%, 57%, 0.2);
    }
    li.navbar__item>a {
        text-decoration: none;
        color: rgb(3, 115, 91);
    }
    .navbar__logo {
        color: rgb(3, 115, 91);
    }
    .navbar__logo, .navbar__side-icon a i {
        font-size: 2.5rem;
    }
    .navbar {
        height: 4rem;
    }
</style>
