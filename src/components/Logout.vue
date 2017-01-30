<template>
    <div>
    </div>
</template>

<script>
    import { firebaseAuth } from '../firebase_config'

    export default {
        name: 'logout',
        created () {
            firebaseAuth.signOut().then((success) => {
                console.log(success)
                this.$store.dispatch('signOut')
                this.$router.push('/')
            })
            .catch((err) => {
                debugger
                console.log(err)
            })
        }
    }
</script>

<style scoped>
</style>

