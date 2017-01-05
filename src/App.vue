<template>
    <v-app top-navbar>
        <header>
            <app-nav></app-nav>
        </header>
        <main>
        <v-content>
            <v-container>
                <img src="./assets/logo.png">
                <router-view></router-view>
            </v-container>
        </v-content>
        </main>
    </v-app>
</template>

<script>
    import Nav from './components/Nav'

    export default {
        name: 'app',
        components: {
            // Home
            appNav: Nav
        },
        mounted () {
            this.$vuetify.init()
        }
    }
</script>

<style lang="scss">
    @import '../node_modules/material-design-icons/iconfont/material-icons.css'; // Might delete later if we don't use it for anything
    @import '../node_modules/vuetify/dist/vuetify.min.css';
    @import '../node_modules/sanitize.css/sanitize.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    header {
        font-family: 'Roboto', sans-serif;
    }
    main {
        font-family: 'Open Sans', sans-serif;
    }
</style>
