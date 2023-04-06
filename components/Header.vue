<template>
    <header class="bg-white">
        <h1 class="dark-blue">
            Where in the world?
        </h1>
        <div class="mode">

        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 10px 1px hsl(0, 0%, 89.12%);
    padding: 1rem 0.8rem;

    h1 {
        font-size: 20px;
        font-weight: 800;
    }
}

.dark {
    header {
        box-shadow: 1px 1px 10px 1px hsl(210deg 19.98% 13.94% / 55%);
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