<template>
    <div class="sponsors text-xs-center text-sm-center text-md-center text-lg-center">
        <h1>Sponsors</h1>
        <router-view></router-view>
        <v-btn v-modal:modal class="teal darken-1 white--text">
            Payment
        </v-btn>
        <v-modal id="modal">
            <v-card>
                <form class="payment">
                    <v-card-text>
                        <h1>VTHacks - Sponsorship payment</h1>
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
                        <v-text-input
                            name="amount"
                            id="amount"
                            label="Amount"
                            v-model.number="paymentData.amount">
                        </v-text-input>
                        <v-text-input
                            name="paymentFor"
                            id="paymentFor"
                            label="Payment For"
                            v-model.number="paymentData.paymentFor">
                        </v-text-input>
                    </v-card-text>
                    <v-card-row actions>
                        <v-btn v-on:click.native="modal('modal')">
                            Cancel
                        </v-btn>
                        <v-spacer>
                        <v-btn v-on:click.native="modal('modal')" class="teal
                            darken-1 white--text">
                            Submit
                        </v-btn>
                    </v-card-row>
                </form>
            </v-card>
        </v-modal>
    </div>
</template>

<script>
    export default {
        name: 'sponsors-info',
        data () {
            return {
                title: 'VTHacks payment',
                paymentData: {
                    company: '',
                    email: '',
                    cardNumber: '',
                    cardExp: '',
                    cardCode: '',
                    amount: '', // for now it will be a NUMBER if we need decimals maybe change to string?
                    paymentFor: ''
                }
            }
        },
        methods: {
            modal (id) {
                this.$vuetify.bus.pub(`modal:close:${id}`)
            }
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
        padding: 1em;
    }
    .input-group:after {
        background-color: $form-label;
    }
    .input-group > label {
        color: $form-label;
    }
</style>

