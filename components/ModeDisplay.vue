<template>
    <div class="mode" @click="changeMode">
        <span :class="{
            'material-icons-outlined icon': theme,
            'material-icons icon': !theme,
        }">
            mode_night
        </span>
        <span class="mode_type">
            Dark Mode
        </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme: true
        }
    },
    methods: {
        changeMode() {
            this.theme = !this.theme;
            document.getElementsByTagName('html')[0].classList.toggle('dark')

        }
    }
}
</script>
<style lang="scss" scoped>
.mode {
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
        transform: rotate(150deg);
        font-size: 20px;

    }

    .mode_type {
        font-weight: 600;
        margin-left: 7px;
    }
}
</style>