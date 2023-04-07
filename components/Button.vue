<template>
    <component :is="link != '' ? 'nuxt-link' : 'div'" :to="link" :class="`bg-white holder ${size}`">
        <slot></slot>
    </component>
</template>
<script>
export default {
    props: {
        link: {
            type: String, required: false, default: ''
        },
        size: {
            type: String, required: false, default: 'default'
        }
    }
}
</script>
<style scoped lang="scss">
.holder {
    text-transform: capitalize;
    cursor: pointer;
    text-align: center;

    box-shadow: 1px 1px 5px 1px hsl(0, 0%, 89.12%);

    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;

    &.default,
    &.big {
        padding: 4px 30px;
        border-radius: 2px;
    }



}

@media (min-width: 1024px) {
    .holder {
        &.big {
            font-size: 16px;
            padding: 7px 35px;
            border-radius: 5px;
        }
    }
}

.dark {
    .holder {
        box-shadow: 0 0 5px 1px hsl(210deg 16.12% 9.4% / 72%);
        color: hsl(0, 0%, 80%);
    }
}
</style>