<template>
    <nuxt-link :to="link" class="bg-white">
        <slot></slot>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        link: {
            type: String, required: true, default: '/'
        }
    }
}
</script>
<style scoped lang="scss">
a {
    text-transform: capitalize;
    width: 70px;
    text-align: center;
    padding: 4px 0;
    box-shadow: 1px 1px 10px 1px hsl(0, 0%, 89.12%);
    border-radius: 4px;
}

.dark {
    a {
        box-shadow: 1px 1px 10px 1px hsl(210deg 19.98% 13.94% / 55%);
    }
}
</style>