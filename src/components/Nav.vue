<template>
    <v-navbar class="white">
        <v-navbar-side-icon v-sidebar:mainsidebar="" class="hidden-sm-and-up"></v-navbar-side-icon>
        <v-navbar-logo>
            <h1 class="navbar__title">VTHACKS</h1>
        </v-navbar-logo>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-navbar-items class="hidden-sm-and-down" :items="itemsGroup"></v-navbar-items>
        <v-navbar-items class="hidden-sm-and-down" :items="authenticated"></v-navbar-items>
    </v-navbar>
</template>

<script>
    export default {
        name: 'nav',
        computed: {
            authenticated () {
                const authInfo = this.$store.getters.isAuth

                if (!authInfo) {
                    return [
                        { text: 'Login/Register', href: '/login', router: true }
                    ]
                } else {
                    const userInfo = this.$store.getters.user
                    return [
                        {
                            parent: { text: `${userInfo.firstname} ${userInfo.lastname}`, icon: 'account_circle' },
                            items: [
                                { text: 'Profile', href: `/profile/${userInfo.uid}`, router: true },
                                { text: 'Logout', href: '/logout', router: true }
                            ]
                        }
                    ]
                }
            }
        },
        data () {
            return {
                itemsGroup: [
                    { text: 'Home', href: '/', router: true },
                    { text: 'Sponsors', href: '/sponsors', router: true }
                ]
            }
        },
        watch: {
            userData () {
                this.userInfo = this.$store.getters.isAuth
            }
        }
    }
</script>

<style lang="scss">
    .navbar__group-header--active, .navbar__item--active {
        background: hsl(175, 41%, 79%);
        box-shadow: 0px -4px 0px #0097A7 inset;
        color: rgba(225, 225, 225, 1);
    }
    .navbar__group-header:hover, .navbar__item:hover {
        background: hsla(181, 31%, 57%, 0.2);
    }
    li a.navbar__item, .navbar__group-header {
        text-decoration: none;
        color: rgb(3, 115, 91);
    }
    .navbar__group .navbar__items .navbar__item:hover {
        background-color: hsla(181, 31%, 57%, 0.2);
    }
    .navbar__group .navbar__items {
        color: #03735b;
        font-weight: 100;
        background-color: #ffffff;
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
        margin: 0%;
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
