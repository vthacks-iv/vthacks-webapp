<template>
    <v-navbar class="white">
        <v-navbar-side-icon v-sidebar:mainsidebar="" class="hidden-sm-and-up"></v-navbar-side-icon>
        <v-navbar-logo>
            <h1 class="navbar__title">VTHACKS</h1>
        </v-navbar-logo>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-navbar-items class="hidden-sm-and-down group-class">
            <v-navbar-item v-for="item in items" :item="item"></v-navbar-item>
            <v-navbar-item id='profileNav' :item="{ text: 'Username' }" v-dropdown:dropdown></v-navbar-item>
            <v-dropdown id="dropdown" v-bind:items="userDropdown"></v-dropdown>
        </v-navbar-items>
    </v-navbar>
</template>

<script>
    export default {
        name: 'nav',
        data () {
            return {
                usernav: false,
                items: [
                    { text: 'Home', href: '/', router: true },
                    { text: 'Sponsors', href: '/sponsors', router: true },
                    { text: 'Login/Register', href: '/register', router: true }
                ],
                userDropdown: [
                    { text: 'Profile', href: '/profile/1', router: true },
                    { text: 'Logout', href: '/logout', router: true }
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
    li a.navbar__item {
        text-decoration: none;
        color: rgb(3, 115, 91);
    }
    .navbar__logo {
        color: rgb(3, 115, 91);
        font-weight: 300;
        padding: 0;
    }
    .navbar {
        height: 4rem;
    }
    .navbar ul {
        font-weight: 400;
    }
    .navbar__title {
        color: #03735b;
        font-size: 3rem;
        font-weight: 300;
    }
    .navbar__side-icon {
        margin: 0 0 0 14px;
        color: teal;
    }
    @media screen and (max-width: 980px) {
        .navbar__items {
            font-size: 15px;
        }
        .navbar__title {
            font-size: 4vw;
        }
    }
    @media screen and (max-width: 640px) {
        .navbar__items {
            font-size: 15px;
        }
        .navbar__title {
            font-size: 6vw;
        }
    }
    #profileNav {
        cursor: pointer;
    }
</style>
