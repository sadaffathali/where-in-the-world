<template>
    <NuxtLink :to="`country/${country.cca2}`" class="country__item bg-white">
        <div class="flag_container">
            <img class="flag" :src="country.flags.png" :alt="country.name.common" loading="lazy">
        </div>
        <div class="country__details">
            <h2 class="dark-blue">
                {{ country.name.common }}
            </h2>

            <CountryDetail title="Population">
                {{ country.population | numberFormatter }}
            </CountryDetail>
            <CountryDetail title="Region">
                {{ country.region }}
            </CountryDetail>
            <CountryDetail title="Capital">
                <span class="detail" v-for="c in country.capital"> {{ c }} </span>
            </CountryDetail>

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
    box-shadow: 1px 1px 10px 1px hsl(0, 0%, 89.12%);

    .flag_container {
        img {
            border-top-right-radius: 7px;
            border-top-left-radius: 7px;
        }
    }

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

    }
}

.dark {
    .country__item {
        box-shadow: 1px 1px 10px 1px hsl(210deg 19.98% 13.94% / 55%);
    }

}
</style>