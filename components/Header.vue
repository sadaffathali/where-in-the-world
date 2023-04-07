<template>
    <header class="bg-white box-shadow">
        <h1 class="dark-blue">
            <nuxt-link to="/">
                Where in the world?
            </nuxt-link>
        </h1>
        <ModeToggle />
    </header>
</template>
<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 0.8rem;

    h1 {
        font-size: 20px;
        font-weight: 800;
    }
}


@media (min-width: 1024px) {
    header {
        padding: .5rem 5rem;

        h1 {
            font-size: 22px;
        }
    }
}
</style>