<template>
    <v-container fluid class="home">
        <v-row>
            <v-col xs12 sm12 md12 lg12>
                <v-row>
                    <v-col lg2>
                    </v-col>
                    <v-col text-lg-center lg8>
                        <app-logo></app-logo>
                        <h1>{{ msg }} is under construction.</h1>
                    </v-col>
                    <v-col class="landing-background-img" lg2>
                        <img src="../../src/assets/title-card-seaweed-right.png">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Logo from '../components/Logo'

    export default {
        name: 'home',
        components: {
            appLogo: Logo
        },
        data () {
            return {
                msg: 'VTHACKS'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
    .landing-background-img {
        position: relative;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
