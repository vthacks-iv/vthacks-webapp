<template>
    <v-app top-navbar footer left-fixed-sidebar class="teal lighten-4" >
        <header>
            <app-nav></app-nav>
        </header>
        <main class="clearfix">
        <v-sidebar drawer id="mainsidebar"></v-sidebar>
            <v-content>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-content>
        </main>
        <v-footer>
            <div> </> with zZz</div>
        </v-footer>
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
        color: #000000;
    }
    header {
        font-family: 'Roboto', sans-serif;
    }
    main {
        font-family: 'Open Sans', sans-serif;
    }
    .content { 
        overflow-y: scroll;
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
    .input-group label {
        color: black;
    }
    .input-group:after {
        background-color: black;
    }
    button[type="submit"] {
        background: white;
    }
    .modal {
        border-radius: 0.5vh !important;
    }
    .with.left-fixed-sidebar header .navbar,
    .with.left-fixed-sidebar footer,
    .with.left-fixed-sidebar main {
        padding-left: 0;
    }
    .with.top-navbar main>.content {
        height: calc(100vh - 7.2em);
        min-height: 28em;
        padding-top: 0rem;
    }
    .footer {
        background: #12515c;
    }
    .footer div {
        text-align: center;
        font-weight: 500;
    }
    .vt-submit-btn {
        border-radius: 0.5vh;
        color: #328782;
        background: #ffffff;
        font-weight: 300;
    }
    @media (min-width: 0px) and (max-width: 740px) {
        .vt-submit-btn {
            padding: 0.5vh 1.5vw;
            font-size: 1.4rem;
        }
    }
    @media screen and (min-width: 767px) {
        .hidden-sm-and-up {
            display: none!important;
        }
    }

    /*
     * Clearfix: contain floats
     *
     * For modern browsers
     * 1. The space content is one way to avoid an Opera bug when the
     *    `contenteditable` attribute is included anywhere else in the document.
     *    Otherwise it causes space to appear at the top and bottom of elements
     *    that receive the `clearfix` class.
     * 2. The use of `table` rather than `block` is only necessary if using
     *    `:before` to contain the top-margins of child elements.
     */

    .clearfix:before, .clearfix:after {
        content: " "; /* 1 */
        display: table; /* 2 */
    }

    .clearfix:after {
        clear: both;
    }
</style>
