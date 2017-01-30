<template>
    <div>
        <label v-if="label">{{ label }}</label>
        $
        <input ref="input"
            v-bind:value="value"
            v-on:input="updateValue($event.target.value)"
            v-on:focus="selectAll"
            v-on:blur="formatValue">
    </div>
</template>

<script>
    import { CurrencyValidator } from '../currency-validator'

    export default {
        name: 'currency-input',
        props: {
            value: {
                type: Number,
                default: 0
            },
            label: {
                type: String,
                default: ''
            }
        },
        mounted: function () {
            this.formatValue()
        },
        methods: {
            updateValue: function (value) {
                var result = CurrencyValidator.parse(value, this.value)
                if (result.warning) {
                    this.$refs.input.value = result.value
                }
                this.$emit('input', result.value)
            },
            formatValue: function () {
                this.$refs.input.value = CurrencyValidator.format(this.value)
            },
            selectAll: function (event) {
                // Workaround for Safari bug
                // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
                setTimeout(function () {
                    event.target.select()
                }, 0)
            }
        }
    }
</script>

<style scoped>
</style>
