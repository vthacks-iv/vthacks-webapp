<template>
    <v-app class="teal lighten-4" >
        <header>
            <app-nav></app-nav>
        </header>
        <main>
        <v-content>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-content>
        </main>
    </v-app>
</template>

<script>
    import Nav from './components/Nav'

    export default {
        name: 'app',
        components: {
            appNav: Nav
        },
        mounted () {
            this.$vuetify.init()
        }
    }
</script>

<style lang="scss">
    @import '../node_modules/material-design-icons/iconfont/material-icons.css'; // Might delete later
    @import '../node_modules/vuetify/dist/vuetify.min.css';
    @import '../node_modules/sanitize.css/sanitize.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
    }
    header {
        font-family: 'Roboto', sans-serif;
    }
    main {
        font-family: 'Open Sans', sans-serif;
    }
    .slide-enter-active {
        transition: all .3s ease;
    }
    .slide-enter, .slide-leave-active {
        opacity: 0;
    }
    .slide-enter {
        transform: translateX(-3rem);
    }
    .slide-leave-active {
        transition: all .2s ease;
        transform: translateX(3rem);
    }
    .input-group>label {
        color: black;
    }
    .input-group:after {
        background-color: black;
    }
    button[type="submit"] {
        background: white;
    }
    form {
        text-align: center;
    }
    .modal {
        border-radius: 2em !important;
    }
</style>
