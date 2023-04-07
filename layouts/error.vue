<template>
    <div>
        <h2>Something bad happend, I guess! pls try again later</h2>
        <nuxt-link to="/" @click.native="collectData">
            Back to Home
        </nuxt-link>
    </div>
</template>
<script>
export default {
    methods: {
        collectData() {
            this.$ga.event({
                eventCategory: 'error',
                eventAction: 'click',
                eventLabel: 'backToHome'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    text-align: center;
    font-weight: 300;
}

div {
    text-align: center;
}

a {
    font-weight: 800;
}
</style>