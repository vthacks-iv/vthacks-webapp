<template>
    <v-container class="payment-form">
        <v-row>
            <v-col xs12 sm12 md12 offset-lg4 lg4>
                <form>
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
                    <div>
                        &nbsp
                    </div>
                    <v-btn type="submit" @click.native.prevent="charge" round>Submit</v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'payment',
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
            charge () {
                this.$http.post(
                    'create',
                    this.paymentData
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
        }
    }
</script>

<style scoped>
</style>
