<template>
    <div class="clearfix home">
        <div class="seaweed-right">
            <img class="right-seaweed" src="../assets/seaweed-right.png" />
        </div>
        <div class="seaweed-left">
            <img class="left-seaweed" src="../assets/seaweed-left.png" />
        </div>
        <v-container class="sponsor-info">
            <app-logo></app-logo>
            <v-row>
                <v-col mt-5 xs12 sm12 md12 offset-lg4 lg4>
                    <h1>{{title}}</h1>
                </v-col>
            </v-row>
            <div>
                <img src="../../src/assets/fish1.png">
                <img src="../../src/assets/fish-2.png">
                <img src="../../src/assets/fish-3.png">
            </div>
        </v-container>
    </div>
</template>

<script>
    import Logo from '../components/Logo'

    export default {
        name: 'sponsors-info',
        data () {
            return {
                title: 'VTHacks Sponsors 2017'
            }
        },
        components: {
            appLogo: Logo
        }
    }
</script>

<style lang="scss" scoped>
    $form-label: black;
    $form-background-color: #a3d0cc;

    .card {
        background: $form-background-color;
        border-radius: 2em !important;
    }
    .card__row--actions {
        border-top: none;
        padding: 1em;
    }
    .input-group:after {
        background-color: $form-label;
    }
    .input-group > label {
        color: $form-label;
    }
    .sponsor-info {
        text-align: center;
        padding-top: 10px;
    }
    .seaweed-right {
        width: 30vh;
        float: right;
    }
    img.right-seaweed {
        position: fixed;
        height: 100vh;
        width: 40vh;
    }
    img.left-seaweed {
        position: fixed;
        height: 100vh;
        width: 30vh;
    }
    @media screen and (max-width: 1180px) {
        .seaweed-right, .seaweed-left{
            display: none;
        }
    }
</style>

