<template>
    <div class="payment">
        <h1>{{ title }}</h1>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="paymentData.name">
        <label for="company">Company</label>
        <input id="company" type="text" v-model="paymentData.company">
        <label for="Amount">Amount</label>
        <input id="amount" type="number" v-model="paymentData.amount">
        <label for="about">Payment for:</label>
        <input id="about" type="text" v-model="paymentData.paymentFor">
        <p id="name">{{ paymentData.name }}</p>
        <button action="submit">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'payment',
        data () {
            return {
                title: 'VTHacks payment',
                paymentData: {
                    name: '',
                    company: '',
                    amount: 0, // for now it will be a NUMBER if we need decimals maybe change to string?
                    paymentFor: ''
                }
            }
        }
    }
</script>

<style scoped>
</style>
