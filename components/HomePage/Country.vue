<template>
    <NuxtLink :to="`country/${country.cca2}`" class="country__item bg-white">
        <div class="flag_container">
            <img class="flag" :src="country.flags.png" :alt="country.name.official" loading="lazy">
        </div>
        <div class="country__details">
            <h2 class="dark-blue">
                {{ country.name.official }}
            </h2>
            <div class="more_detail">
                <span>Population:</span>
                <span class="detail"> {{ country.population | numberFormatter }} </span>
            </div>
            <div class="more_detail">
                <span>Region:</span>
                <span class="detail"> {{ country.region }} </span>
            </div>
            <div class="more_detail">
                <span>Capital:</span>
                <span class="detail" v-for="c in country.capital"> {{ c }} </span>
            </div>
        </div>

    </NuxtLink>
</template>
<script>
export default {
    props: {
        country: {
            type: Object,
            required: true
        }
    },

}
</script>
<style lang="scss" scoped>
.country__item {
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 1px 1px 10px 1px hsl(0, 0%, 89.12%);

    .country__details {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        padding: 0 1rem 2.5rem 1rem;
        margin-top: .8rem;

        h2 {
            font-size: 16px;
            margin-bottom: 1rem;
        }

        .more_detail {
            &:not(:last-child) {
                margin-bottom: 8px;
            }

            font-size: 14px;
            font-weight: 600;

            .detail {
                font-weight: 300;
                margin-left: 3px;
            }
        }

    }
}

.dark {
    .country__item {
        box-shadow: 1px 1px 10px 1px hsl(210deg 19.98% 13.94% / 55%);
    }
}
</style>