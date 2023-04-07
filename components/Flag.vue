<template>
    <div class="flag_container">
        <img class="flag" :src="src" :alt="alt" loading="lazy">
    </div>
</template>
<script>
export default {
    props: ['src', 'alt']
}
</script>

<style lang="scss" scoped>
.flag_container {
    position: relative;
    width: 100%;
    padding-top: 75%; // 4:3 Aspect Ratio

    .flag {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>