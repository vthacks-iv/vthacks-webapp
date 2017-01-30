<template>
    <v-container class="sponsor-info">
        <v-row>
            <v-col mt-5 xs12 sm12 md12 offset-lg4 lg4>
                <app-logo></app-logo>
                <h1>Thank You, Sponsors!</h1>
                <router-view></router-view>
                <v-btn v-modal:modal class="teal darken-1 white--text">
                    Payment
                </v-btn>
                <v-modal id="modal">
                    <v-card>
                        <form class="payment">
                            <v-card-text>
                                <h1>{{title}}</h1>
                                <v-text-input
                                    name="company"
                                    id="company"
                                    label="Company"
                                    v-model="paymentData.company">
                                </v-text-input>
                                <v-text-input
                                    name="email"
                                    id="email"
                                    label="Payer's Email"
                                    v-model="paymentData.email">
                                </v-text-input>
                                <v-text-input
                                    name="card-number"
                                    id="cardNumber"
                                    label="Card Number"
                                    v-model="paymentData.cardNumber">
                                </v-text-input>
                                <v-text-input
                                    name="card-exp"
                                    id="cardExp"
                                    label="Expiration Date (MM/YY)"
                                    v-model="paymentData.cardExp">
                                </v-text-input>
                                <v-text-input
                                    name="card-code"
                                    id="cardCode"
                                    label="CVC"
                                    v-model="paymentData.cardCode">
                                </v-text-input>
                                <currency-input 
                                    label="Amount" 
                                    v-model="paymentData.amount" >
                                </currency-input>
                                <v-text-input
                                    name="paymentFor"
                                    id="paymentFor"
                                    label="Payment For"
                                    v-model.number="paymentData.paymentFor">
                                </v-text-input>
                            </v-card-text>
                            <v-card-row actions>
                                <v-btn id="modal" v-on:click.native.stop="modal('modal')">
                                    Cancel
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn v-on:click.native="charge" class="teal darken-1 white--text">
                                    Submit
                                </v-btn>
                            </v-card-row>
                        </form>
                    </v-card>
                </v-modal>
            </v-col>
        </v-row>
        <div>
            <img src="../../src/assets/fish1.png">
            <img src="../../src/assets/fish-2.png">
            <img src="../../src/assets/fish-3.png">
        </div>
    </v-container>
</template>

<script>
    import Logo from './Logo'
    import CurrencyInput from './CurrencyInput'

    export default {
        name: 'sponsors-info',
        data () {
            return {
                title: 'VTHacks - Sponsorship Payment',
                vthacksPay: 'https://vthacks.webscript.io/',
                paymentData: {
                    company: '',
                    email: '',
                    cardNumber: '',
                    cardExp: '',
                    cardCode: '',
                    amount: 0, // for now it will be a NUMBER if we need decimals maybe change to string?
                    paymentFor: ''
                }
            }
        },
        methods: {
            modal (id) {
                this.$vuetify.bus.pub(`modal:toggle:${id}`)
            },
            charge () {
                let strAmount = (this.paymentData.amount.toString()).replace('.', '')

                this.$http.post(
                    `${this.vthacksPay}create`,
                    {
                        company: this.paymentData.company,
                        email: this.paymentData.email,
                        cardNumber: this.paymentData.cardNumber,
                        cardExp: this.paymentData.cardExp,
                        cardCode: this.paymentData.cardCode,
                        amount: strAmount,
                        paymentFor: this.paymentData.paymentFor
                    }
                )
                .then((res) => {
                    console.log(res)
                }, (err) => {
                    console.log(err)
                })
                this.$router.replace({ name: 'payment-confirmation' })
                this.paymentData.company = ''
                this.paymentData.cardNumber = ''
                this.paymentData.cardExp = ''
                this.paymentData.cardCode = ''
                this.paymentData.amount = ''
                this.paymentData.paymentFor = ''
            }
        },
        components: {
            appLogo: Logo,
            currencyInput: CurrencyInput
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
        height: calc(100vh - 4em);
    }
</style>
